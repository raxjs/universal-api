import {
  getScreenBrightnessFactory,
  setKeepScreenOnFactory,
  setScreenBrightnessFactory,
  onUserCaptureScreenFactory,
  offUserCaptureScreenFactory,
} from '../factory';

declare const wx: any;

const getScreenBrightness = getScreenBrightnessFactory(wx);
const setScreenBrightness = setScreenBrightnessFactory(wx, 'value');
const setKeepScreenOn = setKeepScreenOnFactory(wx);
const onUserCaptureScreen = onUserCaptureScreenFactory(wx);
const offUserCaptureScreen = offUserCaptureScreenFactory(wx);

export default {
  getScreenBrightness,
  setScreenBrightness,
  setKeepScreenOn,
  onUserCaptureScreen,
  offUserCaptureScreen
};
