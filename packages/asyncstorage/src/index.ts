import { isWeb, isWeex, isKraken, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import krakenModule from './kraken/index';
import miniAppModule from './ali-miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './bytedance-microapp/index';

import { AsyncStorage } from './types';

let AsyncStorage: AsyncStorage;
if (isKraken) {
  AsyncStorage = krakenModule;
} else if (isWeb) {
  AsyncStorage = webModule;
} else if (isWeex) {
  AsyncStorage = weexModule;
} else if (isMiniApp) {
  AsyncStorage = miniAppModule;
} else if (isWeChatMiniProgram) {
  AsyncStorage = weChatModule;
} else if (isByteDanceMicroApp) {
  AsyncStorage = bytedanceModule;
}

export default AsyncStorage;
