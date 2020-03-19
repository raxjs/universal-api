import {
  isWeex,
  isMiniApp,
  isWeb,
  isWeChatMiniProgram,
  isQuickApp
} from "universal-env";
import webModule from "./web/index";
import weexModule from "./weex/index";
import miniAppModule from "./miniapp/ali/index";
import weChatModule from "./miniapp/wechat/index";
import quickappModule from "./quickapp/index";
import { ToastOption } from "./types";

let Toast: ToastOption = {} as any;

if (isWeb) {
  // Aviod includes wechat or alipay sdk
  Toast = webModule;
} else if (isWeex) {
  Toast = weexModule;
} else if (isMiniApp) {
  Toast = miniAppModule;
} else if (isWeChatMiniProgram) {
  Toast = weChatModule;
} else if (isQuickApp) {
  Toast = quickappModule;
}

export default Toast;
