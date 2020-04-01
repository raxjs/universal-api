import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import bytedanceModule from './miniapp/bytedance/index';
import { AsyncStorage } from './types';

let AsyncStorage: AsyncStorage;

if (isWeb) {
  AsyncStorage = webModule;
}

if (isWeex) {
  AsyncStorage = weexModule;
}

if (isMiniApp) {
  AsyncStorage = miniAppModule;
}

if (isWeChatMiniProgram) {
  AsyncStorage = weChatModule;
}
if (isByteDanceMicroApp) {
  AsyncStorage = bytedanceModule;
}

export default AsyncStorage;
