// eslint-disable-next-line import/no-extraneous-dependencies
import { isMiniApp, isWeChatMiniProgram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { ActionSheet } from './types';

let ActionSheet: ActionSheet;
if (isMiniApp) {
  ActionSheet = miniAppModule;
}
if (isWeChatMiniProgram) {
  ActionSheet = weChatModule;
}

export default ActionSheet;
