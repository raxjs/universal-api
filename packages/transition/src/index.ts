import { isWeex, isMiniApp, isWeb, isWeChatMiniprogram } from 'universal-env';
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
} else if (isWeChatMiniprogram) {
  transition = weChatModule;
}

export default transition;
