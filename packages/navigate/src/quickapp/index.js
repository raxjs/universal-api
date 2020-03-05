import router from '@system.router';

export default {
  push: (param) => {
    return new Promise((resolve, reject) => {
      if (param.url && param.url !== '') {
        router.push({
          uri: param.url,
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
      router.back();
    });
  }
};
