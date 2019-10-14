import { PushOptions, PopOptions, GoOptions } from '../types';

declare const weex: any;

const navigator = weex.requireModule('navigator');

const push = (options: PushOptions): Promise<null> => {
  return new Promise((resolve): void => {
    const { url, animated = true } = options;
    navigator.push({
      url,
      animated: animated.toString()
    }, (): void => {
      resolve();
    });
  });
};

const pop = (options?: PopOptions): Promise<null> => {
  return new Promise((resolve): void => {
    const animated = options ? options.animated ? options.animated : true : true;
    navigator.pop({
      animated: animated.toString()
    }, (): void => {
      resolve();
    });
  });
};

const go = (options: GoOptions): Promise<null> => {
  return new Promise((resolve, reject): void => {
    const { step, animated = true } = options;
    if (step < 0) {
      pop({
        animated
      }).then(resolve);
    } else {
      reject();
    }
  });
};

export default {
  push,
  pop,
  go
};
