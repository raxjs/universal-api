const Herbox = require('@alipay/herbox-cli').default;
const config = require('./herbox.json');
const path = require('path');

const isProd = process.argv.includes('--prod');

const herboxConfig = {
  basement: {
    accountName: config.accountName,
    appId: config.appId,
    masterKey: config.masterKey,
  },
};

const pubConfig = {
  cwd: path.resolve(__dirname, 'build/miniapp'),
  prod: isProd,
  id: isProd ? config.id : `${config.id}-daily`,
};

const herbox = new Herbox(herboxConfig);

herbox.pub(pubConfig).then((url) => {
  console.log(`Herbox published: ${url}`);
});
