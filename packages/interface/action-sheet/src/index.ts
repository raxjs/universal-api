import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { ActionSheet } from './types';

let ActionSheet: ActionSheet;
if (isMiniApp) {
  ActionSheet = miniAppModule;
}
if (isWeChatMiniprogram) {
  ActionSheet = weChatModule;
}

export default ActionSheet;
