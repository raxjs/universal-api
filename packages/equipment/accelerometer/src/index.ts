import { isMiniApp, isWeChatMiniProgram } from 'universal-env';
import * as miniAppModule from './miniapp/ali';
import * as weChatModule from './miniapp/wechat';

import { Accelerometer } from './types';

let Accelerometer: Accelerometer;
if (isMiniApp) {
  Accelerometer = miniAppModule;
} else if (isWeChatMiniProgram) {
  Accelerometer = weChatModule;
}

export default Accelerometer;
