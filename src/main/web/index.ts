import application from '../../packages/application/src/web/index';
import env from '../../packages/base/env/src/index';
import canIUse from '../../packages/base/canIUse/src/index';
import unitTool from '../../packages/base/unit-tool/src/index';
import canvas from '../../packages/canvas/src/web/index';
import accelerometer from '../../packages/device/accelerometer/src/web/index';
import clipboard from '../../packages/device/clipboard/src/web/index';
import systemInfo from '../../packages/device/systemInfo/src/web/index';
import scan from '../../packages/device/scan/src/web/index';
import file from '../../packages/file/src/web/index';
import actionSheet from '../../packages/interactive/actionSheet/src/web/index';
import alert from '../../packages/interactive/alert/src/web/index';
import animation from '../../packages/interactive/animation/src/web/index';
import toast from '../../packages/interactive/toast/src/web/index';
import loading from '../../packages/interactive/loading/src/web/index';
import navigationBar from '../../packages/interactive/navigationBar/src/web/index';
import pullDownRefresh from '../../packages/interactive/pullDownRefresh/src/web/index';
import tabBar from '../../packages/interactive/tabBar/src/web/index';
import element from '../../packages/interactive/element/src/web/index';
import intersectionObserver from '../../packages/interactive/intersectionObserver/src/web/index';
import confirm from '../../packages/interactive/confirm/src/web/index';
import _location from '../../packages/location/src/web/index';
import image from '../../packages/media/image/src/web/index';
import audio from '../../packages/media/audio/src/web/index';
import navigate from '../../packages/navigate/src/web/index';
import request from '../../packages/network/request/src/web/index';
import storage from '../../packages/storage/src/web/index';
import recorder from '../../packages/media/recorder/src/web/index';
import video from '../../packages/media/video/src/web/index';
import makePhoneCall from '../../packages/device/makePhoneCall/src/web/index';
import vibrate from '../../packages/device/vibrate/src/web/index';
import pageScrollTo from '../../packages/interactive/pageScrollTo/src/web/index';
import authorize from '../../packages/open/authorize/src/web/index';
import subscribeMessage from '../../packages/open/subscribeMessage/src/web/index';
import share from '../../packages/share/src/web/index';

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
