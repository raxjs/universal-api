import { IPushOptions, IGoOptions } from '../types';

const push = (options: IPushOptions): Promise<null> => {
  return new Promise((resolve): void => {
    setTimeout((): void => {
      location.href = options.url;
    });
    resolve();
  });
};

const go = (options: IGoOptions): Promise<null> => {
  return new Promise((resolve): void => {
    setTimeout((): void => {
      history.go(options.step);
    });
    resolve();
  });
};

const pop = (): Promise<null> => {
  return go({
    step: -1
  });
};

export default {
  push,
  pop,
  go
};
