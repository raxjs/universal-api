/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require("gulp");
const path = require("path");
const fs = require("fs-extra");
const babel = require("gulp-babel");
const replace = require("gulp-replace");
const ts = require("gulp-typescript");
const gulpParams = require('./params');
const getBabelConfig = require('./conf/babel');
const { series, parallel } = gulp;

const {
  entry, output
} = gulpParams.gulpInfo;
const { context } = gulpParams.api;
const { rootDir } = context;
// const sourcePath = isMain ? inputPath.replace(/\/index\.(t|j)s/, '') : inputPath.replace(/\/src\/.*/, '');

const srcDir = [
  entry,
  entry.replace(/\/index\.(t|j)s/, '/**/*.ts')
];
const typesDir = [
  path.resolve(rootDir, './types/*.ts'),
  // path.resolve(rootDir, 'node_modules/@types/**/*.ts'),
  path.resolve(rootDir, './types/**/*.ts'),
  entry,
  entry.replace(/\/index\.ts/, '/**/*.ts')
];
const utilsDir = [
  path.resolve(rootDir, 'src/utils/*.{ts,js}'),
  path.resolve(rootDir, 'src/utils/**/*.{ts,js}')
];
const utilsOriName = '@utils';
const utilsNewName = '_utils';
const esDir = path.resolve(output, 'es');
const libDir = path.resolve(output, 'lib');
const typesOutDir = path.resolve(output, 'types');
const libUtilsDir = path.resolve(output, 'lib/_utils');
const esUtilsDir = path.resolve(output, 'es/_utils');

// console.log(entry, entry.replace(/\/index\.(t|j)s/, '/**/*.{ts,js}'))
const tsProject = ts.createProject({
  rootDir: rootDir,
  baseUrl: rootDir,
  declaration: true,
  declarationDir: output,
  skipLibCheck: true,
  // typeRoots: ['./types'],
  target: 'ES6',
  "paths": {
    // "@types/*": ["types/*"],
    // "types/interface": ["./interface"],
    "@/*": ["src/*"],
    "@utils/*": ["src/utils/*"],
  }  
});

const generateTypes = () => {
  const tsResult = gulp
    .src(typesDir)
    .pipe(tsProject());
  return tsResult.dts
  .pipe(replace('types/interface', './interface'))
  .pipe(gulp.dest(typesOutDir));
};
const generateLibJs = () => {
  return gulp
    .src(srcDir)
    // .pipe(tsProject())
    .pipe(
      babel({
        babelrc: false,
        ...getBabelConfig(false),
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
        ...getBabelConfig(true),
      })
    )
    .pipe(gulp.dest(esDir));
};
const sourceEsJs = () => {
  return gulp
    .src(utilsDir)
    // .pipe(tsUtilsProject())
    .pipe(
      babel({
        babelrc: false,
        ...getBabelConfig(true),
      })
    )
    .pipe(gulp.dest(esUtilsDir));
};
const sourceLibJs = () => {
  return gulp
    .src(utilsDir)
    // .pipe(tsUtilsProject())
    .pipe(
      babel({
        babelrc: false,
        ...getBabelConfig(false),
      })
    )
    .pipe(gulp.dest(libUtilsDir));
};

const copyTypes = () => {
  return gulp
    .src([path.resolve(rootDir, './types/interface.d.ts'),
    // path.resolve(rootDir, 'node_modules/@types/**/*.ts'),
    // path.resolve(rootDir, './types/**/*.ts')
  ])
    .pipe(gulp.dest(typesOutDir));
};
function clean(done) {
  fs.removeSync(esDir);
  fs.removeSync(libDir);
  done();
}

exports.default = series(
  clean,
  sourceEsJs,
  sourceLibJs,
  generateEsJs,
  generateLibJs,
  generateTypes,
  copyTypes
);
