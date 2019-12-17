import { isWeex, isMiniApp, isWeb, isWeChatMiniProgram } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';

let transition: any = () => {};
if (isWeb) {
  transition = webModule;
} else if (isWeex) {
  transition = weexModule;
} else if (isMiniApp) {
  transition = miniAppModule;
} else if (isWeChatMiniProgram) {
  transition = weChatModule;
}

export default transition;
