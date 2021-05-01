import { normalizeStart } from '../common';
import { CONTAINER_NAME } from '@utils/constant';
import Events from '@utils/event';

declare let window: any;
if (!window.events) {
  window.events = new Events();
}

const clsPrefix = '__universal_pulldownrefresh';

const styles = `#${clsPrefix}_refreshText {
  position: relative;
  width: 100%;
  line-height: 50rpx;
  text-align: center;
  left: 0;
  top: 0;
}`.replace(/\n/g, '');

let styleElement: HTMLElement | null = null;
let refreshText: HTMLElement | null = null;

const _startPullDownRefresh = () => {
  // console.log("_startPullDownRefresh start");
  refreshText = document.getElementById(`${clsPrefix}_refreshText`)
  if (!refreshText) {
    refreshText = document.createElement('div');
    refreshText.id = `${clsPrefix}_refreshText`;
  }
  document.body.insertBefore(refreshText, document.body.firstElementChild);
  refreshText.innerText = '下拉刷新';
  setTimeout(() => {
    refreshText.innerText = '更新中...';
    // console.log("触发更新");
  }, 500);
}

export const startPullDownRefresh = normalizeStart(({ success = () => {}, fail = () => {}, complete = () => {} }) => {
  try {
    if (!styleElement) {
      // create a style tag for keyframes
      styleElement = document.createElement('style');
      styleElement.innerHTML = styles;
      document.body.appendChild(styleElement);
    }
    _startPullDownRefresh();
    window.events.emit('pulldownrefresh');

    success();
    complete();
  } catch (error) {
    fail();
    complete();
  }
}, CONTAINER_NAME.WEB);
  
export default startPullDownRefresh;

