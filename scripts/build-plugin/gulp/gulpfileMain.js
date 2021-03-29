/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require("gulp");
const path = require("path");
const fs = require("fs-extra");
const babel = require("gulp-babel");
const replace = require("gulp-replace");
const ts = require("gulp-typescript");
const gulpParams = require('./params');
const getBabelConfig = require('./conf/babel');
const { series } = gulp;

const {
  output
} = gulpParams.gulpInfo;
const { context } = gulpParams.api;
const { rootDir } = context;
// const sourcePath = isMain ? inputPath.replace(/\/index\.(t|j)s/, '') : inputPath.replace(/\/src\/.*/, '');
const srcDir = [
  path.resolve(rootDir, 'src/**/*.ts'),
  '!' + path.resolve(rootDir, 'src/.umi/**/*.ts'),
  '!' + path.resolve(rootDir, 'src/.umi/*.ts'),
  '!' + path.resolve(rootDir, 'src/**/network-info/**/*.ts'),
  '!' + path.resolve(rootDir, 'src/**/background/**/*.ts'),
  '!' + path.resolve(rootDir, 'src/**/keyboard/**/*.ts'),
  '!' + path.resolve(rootDir, 'src/**/animation/**/*.ts'),
  '!' + path.resolve(rootDir, 'src/**/transition/**/*.ts'),
  '!' + path.resolve(rootDir, 'src/**/docs/*.ts'),
  '!' + path.resolve(rootDir, 'src/**/demo/*.ts'),
];
const typesDir = [
  path.resolve(rootDir, './types/*.ts'),
  // path.resolve(rootDir, 'node_modules/@types/**/*.ts'),
  path.resolve(rootDir, './types/**/*.ts'),
  ...srcDir
];
const utilsOriName = '@utils';
const utilsNewName = '_utils';
const esDir = path.resolve(output, 'es');
const libDir = path.resolve(output, 'lib');
const typesOutDir = path.resolve(output, 'types');

// console.log(entry, entry.replace(/\/index\.(t|j)s/, '/**/*.{ts,js}'))
const tsProject = ts.createProject({
  rootDir: rootDir,
  baseUrl: rootDir,
  declaration: true,
  declarationDir: output,
  skipLibCheck: true,
  target: 'ES6',
  "paths": {
    "types/*": ["types/*"],
    "@/*": ["src/*"],
    "@utils/*": ["src/utils/*"],
  }  
});

const generateTypes = () => {
  const tsResult = gulp
    .src(typesDir)
    .pipe(tsProject());
  return tsResult.dts.pipe(gulp.dest(typesOutDir));
};
const generateLibJs = () => {
  return gulp
    .src(srcDir)
    // .pipe(tsProject())
    .pipe(
      babel({
        babelrc: false,
        ...getBabelConfig(false, true),
      })
    )
    .pipe(gulp.dest(libDir));
};
const generateEsJs = () => {
  return gulp
    .src(srcDir)
    // .pipe(tsProject())
    .pipe(
      babel({
        babelrc: false,
        ...getBabelConfig(true, true),
      })
    )
    .pipe(gulp.dest(esDir));
};

// const copyLibOther = () => {
//   return gulp
//     .src(["../src/**/!(*.js|*.jsx|*.ts|*.tsx|*.scss|*.less|*.json)"])
//     .pipe(gulp.dest(destGenLibDir));
// };
function clean(done) {
  fs.removeSync(esDir);
  fs.removeSync(libDir);
  done();
}

exports.default = series(
  clean,
  generateEsJs,
  generateLibJs,
  generateTypes
);
