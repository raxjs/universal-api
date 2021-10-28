import application from '../../packages/application/src/bytedance-microapp/index';
import env from '../../packages/base/env/src/index';
import canIUse from '../../packages/base/canIUse/src/index';
import unitTool from '../../packages/base/unit-tool/src/index';
import canvas from '../../packages/canvas/src/bytedance-microapp/index';
import accelerometer from '../../packages/device/accelerometer/src/bytedance-microapp/index';
import clipboard from '../../packages/device/clipboard/src/bytedance-microapp/index';
import systemInfo from '../../packages/device/systemInfo/src/bytedance-microapp/index';
import scan from '../../packages/device/scan/src/bytedance-microapp/index';
import file from '../../packages/file/src/bytedance-microapp/index';
import actionSheet from '../../packages/interactive/actionSheet/src/bytedance-microapp/index';
import alert from '../../packages/interactive/alert/src/bytedance-microapp/index';
import animation from '../../packages/interactive/animation/src/bytedance-microapp/index';
import toast from '../../packages/interactive/toast/src/bytedance-microapp/index';
import loading from '../../packages/interactive/loading/src/bytedance-microapp/index';
import navigationBar from '../../packages/interactive/navigationBar/src/bytedance-microapp/index';
import pullDownRefresh from '../../packages/interactive/pullDownRefresh/src/bytedance-microapp/index';
import tabBar from '../../packages/interactive/tabBar/src/bytedance-microapp/index';
import element from '../../packages/interactive/element/src/bytedance-microapp/index';
import intersectionObserver from '../../packages/interactive/intersectionObserver/src/bytedance-microapp/index';
import confirm from '../../packages/interactive/confirm/src/bytedance-microapp/index';
import _location from '../../packages/location/src/bytedance-microapp/index';
import image from '../../packages/media/image/src/bytedance-microapp/index';
import audio from '../../packages/media/audio/src/bytedance-microapp/index';
import navigate from '../../packages/navigate/src/bytedance-microapp/index';
import request from '../../packages/network/request/src/bytedance-microapp/index';
import storage from '../../packages/storage/src/bytedance-microapp/index';
import recorder from '../../packages/media/recorder/src/bytedance-microapp/index';
import video from '../../packages/media/video/src/bytedance-microapp/index';
import makePhoneCall from '../../packages/device/makePhoneCall/src/bytedance-microapp/index';
import vibrate from '../../packages/device/vibrate/src/bytedance-microapp/index';
import pageScrollTo from '../../packages/interactive/pageScrollTo/src/bytedance-microapp/index';
import authorize from '../../packages/open/authorize/src/bytedance-microapp/index';
import subscribeMessage from '../../packages/open/subscribeMessage/src/bytedance-microapp/index';
import share from '../../packages/share/src/bytedance-microapp/index';

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
