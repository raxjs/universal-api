// eslint-disable-next-line import/no-extraneous-dependencies
import { isWeb, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import aliMiniApp from './ali-miniapp';
import wechatMiniProgram from './wechat-miniprogram';
import web from './web';
import { CanvasContext } from './types';

let createContext: (
  selector: string,
  type?: string,
  options?: object
) => Promise<CanvasContext>;

if (isMiniApp && !isWeb) {
  // For cased that import wechat or miniapp sdk in web
  createContext = aliMiniApp;
} else if (isWeChatMiniProgram && !isWeb) {
  createContext = wechatMiniProgram;
} else {
  // Web as default
  createContext = web;
}

export default createContext;
