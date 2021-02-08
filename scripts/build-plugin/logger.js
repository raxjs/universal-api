const chalk = require('chalk');
module.exports = function ( text = '', opts = { status: 'INFO' } ) {
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