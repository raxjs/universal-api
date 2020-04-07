import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram ,isQuickApp} from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import quickAppModule from './quickapp/index';

import { Alert } from './types';

let alert: Alert = () => Promise.resolve(null);
if (isWeb) {
  alert = webModule;
}
if (isWeex) {
  alert = weexModule;
}
if (isMiniApp) {
  alert = miniAppModule;
}
if (isWeChatMiniProgram) {
  alert = weChatModule;
}
if(isQuickApp){
  alert = quickAppModule;
}

export default alert;
