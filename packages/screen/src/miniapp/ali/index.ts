import {
  getScreenBrightnessFactory,
  setKeepScreenOnFactory,
  setScreenBrightnessFactory,
  onUserCaptureScreenFactory,
  offUserCaptureScreenFactory,
} from '../factory';

declare const ali: any;

const getScreenBrightness = getScreenBrightnessFactory(ali);
const setScreenBrightness = setScreenBrightnessFactory(ali, 'brightness');
const setKeepScreenOn = setKeepScreenOnFactory(ali);
const onUserCaptureScreen = onUserCaptureScreenFactory(ali);
const offUserCaptureScreen = offUserCaptureScreenFactory(ali);

export default {
  getScreenBrightness,
  setScreenBrightness,
  setKeepScreenOn,
  onUserCaptureScreen,
  offUserCaptureScreen
};
