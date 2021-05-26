import { normalizeStart } from '../common';
import { CONTAINER_NAME } from '@utils/constant';
import Events from '@utils/event';
import { isWeb } from '@uni/env';

if (isWeb) {
  if (!(window as any).events) {
    (window as any).events = new Events();
  }
}

const _startPullDownRefresh = () => {
  const clsPrefix = '__universal_pulldownrefresh';

  const styles = {
    refresh: {
      position: 'relative',
      width: '100%',
      height: '50px',
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    },
    refreshLoadingStyle: {
      height: '16px',
      width: '16px',
      marginRight: '10px',
      color: '#999',
    },
    refreshText: {
      fontSize: '14px',
      color: '#999',
    },
  };

  let refresh: HTMLElement | null = null;
  let refreshText: HTMLElement | null = null;
  let refreshLoadingImg: HTMLElement | null = null;

  // console.log("_startPullDownRefresh start");
  refresh = document.getElementById(`${clsPrefix}_refresh`);
  refreshText = document.getElementById(`${clsPrefix}_refreshText`);
  refreshLoadingImg = document.getElementById(`${clsPrefix}_refreshLoadingImg`);
  if (!refresh) {
    refresh = document.createElement('div');
    refresh.id = `${clsPrefix}_refresh`;
    for (const key in styles.refresh) {
      if (Object.prototype.hasOwnProperty.call(styles.refresh, key)) {
        refresh.style[key] = styles.refresh[key];
      }
    }
  }
  if (!refreshText) {
    refreshText = document.createElement('div');
    refreshText.id = `${clsPrefix}_refreshText`;
    for (const key in styles.refreshText) {
      if (Object.prototype.hasOwnProperty.call(styles.refreshText, key)) {
        refreshText.style[key] = styles.refreshText[key];
      }
    }
  }
  if (!refreshLoadingImg) {
    refreshLoadingImg = document.createElement('img');
    refreshLoadingImg.id = `${clsPrefix}_refreshLoadingImg`;
    for (const key in styles.refreshLoadingStyle) {
      if (Object.prototype.hasOwnProperty.call(styles.refreshLoadingStyle, key)) {
        refreshLoadingImg.style[key] = styles.refreshLoadingStyle[key];
      }
    }
    refreshLoadingImg.setAttribute('src', 'https://gw.alicdn.com/imgextra/i4/O1CN01X5Adob1J0TGk79HNn_!!6000000000966-1-tps-400-400.gif');
  }

  if (refresh !== document.body.firstElementChild) {
    document.body.insertBefore(refresh, document.body.firstElementChild);
  }
  refresh.appendChild(refreshText);
  if (refreshLoadingImg !== refresh.firstElementChild) {
    refresh.insertBefore(refreshLoadingImg, refresh.firstElementChild);
  }
  refreshText.innerText = '更新中...';
  // console.log("触发更新");
};

const startPullDownRefresh = normalizeStart(({ success = () => {}, fail = () => {}, complete = () => {} }) => {
  try {
    _startPullDownRefresh();

    (window as any).events.emit('pulldownrefresh');

    success();
    complete();
  } catch (error) {
    fail();
    complete();
  }
}, CONTAINER_NAME.WEB);

export default startPullDownRefresh;

