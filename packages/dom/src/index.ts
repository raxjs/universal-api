// eslint-disable-next-line import/no-extraneous-dependencies
import { isWeb, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import miniapp from './miniapp';
import web from './web';
import { Element } from './types';

let element: Element;

if ((isMiniApp || isWeChatMiniProgram) && !isWeb) {
  // For cased that import wechat or miniapp sdk in web
  element = miniapp;
} else {
  // Web as default
  element = web;
}

const getScrollOffset = element.getScrollOffset;
const getBoundingClientRect = element.getBoundingClientRect;

export {
  getScrollOffset,
  getBoundingClientRect
};
