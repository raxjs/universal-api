// eslint-disable-next-line import/no-extraneous-dependencies
import {isDingdingMiniapp, isMiniapp, isWeChatMiniProgram, isWeb } from 'universal-env';
import { promisify } from './promisify';

export default (platformApi: string, ...args: any) => {
  if (isMiniapp) {
    return promisify(my[platformApi])(args);
  } else if (isWeChatMiniProgram) {
    return promisify(wx[platformApi])(args);
  } else {
    throw new Error('暂不支持该API');
  }
};
