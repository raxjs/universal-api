import { Options } from '../types';

const choose = (options: Options = {}): Promise<null> => {
  console.log(options);
  return Promise.reject();
};

export default choose;
