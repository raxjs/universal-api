// eslint-disable-next-line import/no-extraneous-dependencies
import { isWeb, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import miniapp from './miniapp';
import web from './web';
import { Dom } from './types';

let dom: Dom;

if ((isMiniApp || isWeChatMiniProgram) && !isWeb) {
  // For cased that import wechat or miniapp sdk in web
  dom = miniapp;
} else {
  // Web as default
  dom = web;
}

const getScrollOffset = dom.getScrollOffset;
const getBoundingClientRect = dom.getBoundingClientRect;

export {
  getScrollOffset,
  getBoundingClientRect
};
