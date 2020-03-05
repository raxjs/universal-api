import router from '@system.router';
import qs from 'qs';

export default {
  push: function push(param) {
    return new Promise((resolve, reject) => {
      if (param.url && param.url !== '') {
        param.animated && delete param.animated;
        var arr = Object.assign({}, param);
        delete arr.url;
        var uri = '';
        uri = `${param.url}?${qs.stringify(arr)}`;
        router.push({
          uri,
        });
        resolve('success');
      } else {
        reject('lack of url');
      }
    });
  },
  go: (param) => {
    return new Promise((resolve, reject) => {
      if (param.step === -1) {
        resolve('success');
        router.back();
      } else {
        reject('Step only supports values of -1');
      }
    });
  },
  pop: () => {
    return new Promise((resolve, reject) => {
      resolve('success');
      router.clear();
    });
  }
};
