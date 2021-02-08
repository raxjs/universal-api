const chalk = require('chalk');

module.exports = {
  info(content) {
    console.log(chalk.green(content));
  },
  error(content) {
    console.log(chalk.red(content));
  },
};
