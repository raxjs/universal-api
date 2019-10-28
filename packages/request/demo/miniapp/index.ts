/* eslint-disable new-cap */
/* eslint-disable no-undef */
import request, { jsonp } from '../../src/index';

Page({
  data: {
    res: 'loading'
  },
  onLoad() {
    request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        test: '1'
      },
      timeout: 5000
      // dataType: 'text' as any
    }).then((data) => {
      console.log('data', data);
      const sendData = data.data;
      this.setData({
        data: sendData.data,
        url: sendData.url,
        headers: JSON.stringify(sendData.headers),
        json: JSON.stringify(sendData.json)
      });
    }).catch((error) => {
      console.error('error', error);
      this.setData({
        error
      });
    });
  }
});
