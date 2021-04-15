/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line import/no-extraneous-dependencies
// @ts-nocheck
import { isDingdingMiniapp, isMiniapp, isWeChatMiniProgram, isWeb } from '@uni/env';

export default (platformApi: string, ...args: any) => {
  if (isDingdingMiniapp) {
    return dd[platformApi](args);
  } else if (isMiniapp) {
    return my[platformApi](args);
  } else if (isWeChatMiniProgram) {
    return wx[platformApi](args);
  } else if (isWeb) {
    return window[platformApi](args);
  }
};
