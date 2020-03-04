import router from '@system.router';

export default {
  push: (param) => {
    if (param.url && param.url !== '') {
      param.animated && delete param.animated;
      let arr = Object.assign({}, param);
      delete arr.url;
      router.push({
        uri: param.url,
        params: arr,
      });
    }
  },
  go: (param) => {
    if (param.step === -1) {
      router.back();
    }
  },
  pop: () => {
    router.clear();
  }
};
