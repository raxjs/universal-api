import Clipboard from '../../src/miniapp/index';

Page({
  onLoad() {
  },
  readText() {
    Clipboard.readText().then(text => {
      my.showToast({
        type: 'success',
        content: 'Success read text',
      });
    }).catch(() => {
    });
  },
  writeText() {
    Clipboard.writeText('Hello World').then(() => {
      my.showToast({
        type: 'success',
        content: 'Success write text',
      });
    }).catch(() => {
    });
  }
});
