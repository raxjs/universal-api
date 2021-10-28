import application from '../packages/application/src/index';
import env from '../packages/base/env/src/index';
import canIUse from '../packages/base/canIUse/src/index';
import unitTool from '../packages/base/unit-tool/src/index';
import canvas from '../packages/canvas/src/index';
import accelerometer from '../packages/device/accelerometer/src/index';
import clipboard from '../packages/device/clipboard/src/index';
import systemInfo from '../packages/device/systemInfo/src/index';
import scan from '../packages/device/scan/src/index';
import file from '../packages/file/src/index';
import actionSheet from '../packages/interactive/actionSheet/src/index';
import alert from '../packages/interactive/alert/src/index';
import animation from '../packages/interactive/animation/src/index';
import toast from '../packages/interactive/toast/src/index';
import loading from '../packages/interactive/loading/src/index';
import navigationBar from '../packages/interactive/navigationBar/src/index';
import pullDownRefresh from '../packages/interactive/pullDownRefresh/src/index';
import tabBar from '../packages/interactive/tabBar/src/index';
import element from '../packages/interactive/element/src/index';
import intersectionObserver from '../packages/interactive/intersectionObserver/src/index';
import confirm from '../packages/interactive/confirm/src/index';
import _location from '../packages/location/src/index';
import image from '../packages/media/image/src/index';
import audio from '../packages/media/audio/src/index';
import navigate from '../packages/navigate/src/index';
import request from '../packages/network/request/src/index';
import storage from '../packages/storage/src/index';
import recorder from '../packages/media/recorder/src/index';
import video from '../packages/media/video/src/index';
import makePhoneCall from '../packages/device/makePhoneCall/src/index';
import vibrate from '../packages/device/vibrate/src/index';
import pageScrollTo from '../packages/interactive/pageScrollTo/src/index';
import authorize from '../packages/open/authorize/src/index';
import subscribeMessage from '../packages/open/subscribeMessage/src/index';
import share from '../packages/share/src/index';

export {
  application,
  env,
  canIUse,
  unitTool,
  canvas,
  accelerometer,
  clipboard,
  systemInfo,
  scan,
  file,
  actionSheet,
  alert,
  animation,
  toast,
  loading,
  navigationBar,
  pullDownRefresh,
  tabBar,
  element,
  intersectionObserver,
  confirm,
  _location as location,
  image,
  audio,
  navigate,
  request,
  storage,
  recorder,
  video,
  makePhoneCall,
  vibrate,
  pageScrollTo,
  authorize,
  subscribeMessage,
  share,
};


export default {
  application,
  env,
  canIUse,
  unitTool,
  canvas,
  accelerometer,
  clipboard,
  systemInfo,
  scan,
  file,
  actionSheet,
  alert,
  animation,
  toast,
  loading,
  navigationBar,
  pullDownRefresh,
  tabBar,
  element,
  intersectionObserver,
  confirm,
  location: _location,
  image,
  audio,
  navigate,
  request,
  storage,
  recorder,
  video,
  makePhoneCall,
  vibrate,
  pageScrollTo,
  authorize,
  subscribeMessage,
  share,
};
