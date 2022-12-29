
const shelljs = require('shelljs');
const sourceMap = require('../api-config');
const execa = require("execa");
const {Listr} = require("listr2");

const buildAll = () => {
  let res = [];
  Object.entries(sourceMap).forEach(([key, value]) => {
    // const sourcePath = value.path.replace(/\/src\/.*/, '');
    res.push({
      title: `@uni/${key} buiding`,
      task: () => execa("build-scripts", ["build", '--api', `${key}`]),
    });
  });
  new Listr(res, { concurrent: true, exitOnError: false }).run().catch((err) => {
    console.error(err);
  });
}

const apiName = process.argv[2];

if (apiName) {
  shelljs.exec(`build-scripts build --api ${apiName}`);
} else if (process.env.BUILD_TYPE === 'all') {
  buildAll();
} else if (process.env.BUILD_TYPE === 'main') {
  shelljs.exec(`build-scripts build --api main`);
} else {
  buildAll();
}