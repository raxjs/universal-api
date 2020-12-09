const path = require('path');
const rollup = require('rollup');
const mainPkg = require('../package.json');
const rm = require('rimraf');
const getRollupConfig = require('./rollupConfig');
// import filesize from 'rollup-plugin-filesize';
const sourceMap = require('../api-config');
const packageTpl = require('./source/package-tpl');
const compose = require('koa-compose');
const chalk = require('chalk');
const fs = require('fs-extra');
// const buildDTS = require('./buildDTS');

const root = process.cwd();
const outputDir = 'dist/';
const getItemOutputPath = (name, dir = 'lib/') => dir + name + '/';
// console.log('commonjs', commonjs);
function logger( text = '', opts = { status: 'INFO' } ) {
  let logText = '';
  switch ( opts.status) {
    case 'SUCCESS':
      logText = `${chalk.bgGreen('[SUCCESS]')} ${chalk.green(text)}`;
      break;
    case 'WARN':
      logText = `${chalk.bgYellow('[WARN]')} ${chalk.yellow(text)}`;
      break;
    case 'ERROR':
      logText = `${chalk.bgRed('[ERROR]')} ${chalk.red(text)}`;
      break;
    default:
      logText = `${chalk.bgBlue('[INFO]')} ${chalk.white(text)}`;
      break;
  }
  console.log(logText);
}
const compiler = async(config, packageInfo, _outputPath) => {
  const inputOptions = config[0];
  
  const isMain = inputOptions.input.indexOf('packages/index.ts') !== -1;
  logger(`开始编译 ${packageInfo.name}`);
  // 写入当前组件包的依赖
  packageTpl.version = packageInfo.version;
  packageTpl.name = packageInfo.name;
  packageTpl.dependencies = {...packageTpl.dependencies, ...packageInfo.dependencies};
  if (isMain) {
    delete packageTpl.dependencies['universal-env'];
  }

  // packageTpl.dependencies[componentPackage.name] = path.relative(distDir, root) + '/';
  await fs.outputJSON(path.resolve(root, _outputPath + 'package.json'), packageTpl);
  if (packageInfo.dependencies) {
    Object.keys(packageInfo.dependencies).forEach(name => {
      const filePath = path.resolve(root, `types/${name}.d.ts`);
      if (!fs.pathExistsSync(filePath)) {
        const DTSFileContent = `declare module '${name}';`;
        fs.writeFileSync(filePath, DTSFileContent);
      }
    });
  }
  
  // create a bundle
 
  const list = [];
  config.forEach((i) => {
    const inputOptions = i;
    const outputOptions = i.output;
    list.push(async(ctx, next) => {
      const bundle = await rollup.rollup(inputOptions);
      await bundle.generate(outputOptions);
      // or write the bundle to disk
      await bundle.write(outputOptions);
      logger(`编译结束 ${outputOptions.file}`);
      await next();
    });
  });
  await compose(list)();

  // await bundle.generate(outputOptions);
  // // or write the bundle to disk
  // await bundle.write(outputOptions);
  // logger(`编译结束 ${outputOptions.file}`);
  // await next();
};
const release = (sourcePath, packageInfo, outputPath) => {
  return async function(ctx, next) {
    const config = getRollupConfig(sourcePath, outputPath, sourceMap);
    const _outputPath = outputDir + outputPath;
    const inputOptions = config[0];
    const tsPath = inputOptions.input.replace(/\.(t|j)s/, '.d.ts');
    const isMain = inputOptions.input.indexOf('packages/index.ts') !== -1;
    const typesPath = path.resolve(root, inputOptions.input.replace("index.ts", "types.ts"));
    rm.sync(path.resolve(root, _outputPath));
    await compiler(config, packageInfo, _outputPath);
    // await compiler(config[1], packageInfo, _outputPath);
    // await compiler(config[2], packageInfo, _outputPath);

    // 移动对应的types文件
    if (isMain) {
      fs.moveSync(path.resolve(root, _outputPath, 'packages'), path.resolve(root, _outputPath, 'types'));
      // rm.sync(path.resolve(root, _outputPath, 'packages'));
    } else {
      fs.moveSync(path.resolve(root, _outputPath, tsPath), path.resolve(root, _outputPath, 'types/index.d.ts'));
      rm.sync(path.resolve(root, _outputPath, 'packages'));
      if (fs.pathExistsSync(typesPath)) {
        fs.copyFileSync(typesPath, path.resolve(root, _outputPath, 'types/types.d.ts'));
      }
    }
    
    await next();
  };
};
const getConfList = (apiName) => {
  let res = [];
  if (Array.isArray(sourceMap[apiName].pkgInfo)) {
    sourceMap[apiName].pkgInfo.forEach(i => res.push(
      release(sourceMap[apiName].path, i, getItemOutputPath(i.name, sourceMap[apiName].outputDir))
    ));
  } else {
    res.push(release(sourceMap[apiName].path, sourceMap[apiName].pkgInfo, getItemOutputPath(sourceMap[apiName].pkgInfo.name, sourceMap[apiName].outputDir)));
  }
  return res;
};
let taskList = [];
const allTask = () => {
  Object.entries(sourceMap).map(([key, value]) => {
    taskList.push(...getConfList(key));
  });
};
const mainTask = () => {
  const buildDts = async (ctx, next) => {
    // buildDTS(Object.entries(sourceMap).map(([key, value]) => value.path), path.resolve(root, outputDir, 'main'));
    await next();
  };
  
  const indexFileContent = Object.entries(sourceMap).map(([key, value]) => {
    return `export * as ${key} from '${value.path.replace('packages/', './').replace(/\.(t|j)s/, '')}';`;
  }).join('\r\n');
  fs.writeFileSync('packages/index.ts', indexFileContent);
  taskList.push(
    release('packages/index.ts', {
      version: mainPkg.version,
      name: mainPkg.name,
    }, 'main/'), buildDts
  );
};

const apiName = process.argv[2];
if (apiName) {
  taskList = getConfList(apiName);
} else if (process.env.BUILD_TYPE === 'all') {
  allTask();
} else if (process.env.BUILD_TYPE === 'main') {
  mainTask();
} else {
  // 默认构建全部api
  allTask();
  mainTask();
}
compose(taskList)().then(function() {
  logger('END', {status: 'SUCCESS'});
}).catch(function(err) {
  console.log(err);
});