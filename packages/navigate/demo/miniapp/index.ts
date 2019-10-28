import Navigate from '../../src/miniapp/index';

Page({
  onLoad() {
  },
  jump() {
    Navigate.push({
      url: 'index'
    });
  },
  pop() {
    Navigate.pop();
  },
  go() {
    Navigate.go({
      step: -1
    }).catch(e => {
      console.log('e: ', e)
    });
  }
});
