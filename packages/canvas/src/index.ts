// eslint-disable-next-line import/no-extraneous-dependencies
import { isWeb, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import aliMiniApp from './ali-miniapp';
import wechatMiniProgram from './wechat-miniprogram';
import web from './web';
import { Canvas } from './types';

let canvas: Canvas;

if (isMiniApp && !isWeb) {
  // For cased that import wechat or miniapp sdk in web
  canvas = aliMiniApp;
} else if (isWeChatMiniProgram && !isWeb) {
  canvas = wechatMiniProgram;
} else {
  // Web as default
  canvas = web;
}

const createContext = canvas.createContext;

export {
  createContext
};
