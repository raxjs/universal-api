import { isQuickApp } from 'universal-env';
import otherModule from '../index';

let exportModule;

function push(param) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const router = require('@system.router');
    if (param.url && param.url !== '') {
      router.push({
        uri: param.url,
      });
      resolve('success');
    } else {
      reject('lack of url');
    }
  });
}

function go(param) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const router = require('@system.router');
    if (param.step === -1) {
      resolve('success');
      router.back();
    } else {
      reject('Step only supports values of -1');
    }
  });
}

function pop() {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const router = require('@system.router');
    resolve('success');
    router.back();
  });
}

if (isQuickApp) {
  exportModule = {
    push,
    go,
    pop
  };
} else {
  exportModule = otherModule;
}

export default exportModule;
