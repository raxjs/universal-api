import { isWeb, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import miniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';

import { AsyncStorage } from './types';

let AsyncStorage: AsyncStorage;
if (isWeb) {
  AsyncStorage = webModule;
} else if (isMiniApp) {
  AsyncStorage = miniAppModule;
} else if (isWeChatMiniProgram) {
  AsyncStorage = weChatModule;
} else if (isByteDanceMicroApp) {
  AsyncStorage = bytedanceModule;
}

export default AsyncStorage;
