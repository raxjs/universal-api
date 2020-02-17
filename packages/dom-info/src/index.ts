// eslint-disable-next-line import/no-extraneous-dependencies
import { isWeb, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import miniapp from './miniapp';
import web from './web';
import { DomInfo } from './types';

let domInfo: DomInfo;

if ((isMiniApp || isWeChatMiniProgram) && !isWeb) {
  // For cased that import wechat or miniapp sdk in web
  domInfo = miniapp;
} else {
  // Web as default
  domInfo = web;
}

const getScrollOffset = domInfo.getScrollOffset;
const getBoundingClientRect = domInfo.getBoundingClientRect;

export {
  getScrollOffset,
  getBoundingClientRect
};
