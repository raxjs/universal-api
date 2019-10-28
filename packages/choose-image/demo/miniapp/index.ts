import chooseImage from '../../src/miniapp/index';

Page({
  onLoad() {
    chooseImage({
    }).then((res) => {
      console.log(res);
    }).catch(e => {
      console.log(e)
    });
  }
});
