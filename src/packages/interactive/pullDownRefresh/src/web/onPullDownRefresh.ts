import {
  normalizeSwitch,
} from '../common';
import {
  CONTAINER_NAME,
} from '@utils/constant';
import Events from '@utils/event';

class PullDownRefresh {
  enablePullDownRefresh: (params) => void;
  disablePullDownRefresh: () => void;
  private cb1: (params) => void;
  private cb2: (params) => void;
  private cb3: (params) => void;
  constructor() {
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
    /**
     * 获取刷新Dom
     * @param status {number} 1:下拉刷新状态 2:正在刷新状态
     * @returns
     */
    const _getRefresh = (status: number) => {
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
      refresh.appendChild(refreshText);
      switch (status) {
        case 1:
          if (refresh !== document.body.firstElementChild) {
            document.body.insertBefore(refresh, document.body.firstElementChild);
          }
          if (refreshLoadingImg === refresh.firstElementChild) {
            refresh.removeChild(refreshLoadingImg);
          }
          refreshText.innerText = '下拉刷新';
          break;
        case 2:
          if (refreshLoadingImg !== refresh.firstElementChild) {
            refresh.insertBefore(refreshLoadingImg, refresh.firstElementChild);
          }
          refreshText.innerText = '更新中...';
          break;
        default:
          break;
      }
      return refresh;
    };

    // let cb1: (params) => void; let cb2: (params) => void; let
    //   cb3: (params) => void;

    /**
     * 开启手动下拉
     * @param triggerDistance 触发'pulldownrefresh'所需的距离
     */
    const enablePullDownRefresh = (triggerDistance) => {
      const _element = document.body;
      let _startPos = 0;
      let _transitionHeight = 0;
      if (!this.cb1) {
        this.cb1 = function (e) {
          // console.log('初始位置：', e.touches[0].pageY);
          _startPos = e.touches[0].pageY;
        };
        _element.addEventListener('touchstart', this.cb1, true);
      }
      if (!this.cb2) {
        this.cb2 = function (e) {
          // console.log('当前位置：', e.touches[0].pageY);
          _transitionHeight = e.touches[0].pageY - _startPos;
          // console.log(_transitionHeight)
          if (_transitionHeight > 0 && _transitionHeight < triggerDistance) {
            _getRefresh(1);
          }
        };
        _element.addEventListener('touchmove', this.cb2, true);
      }
      if (!this.cb3) {
        this.cb3 = function (e) {
          if (_transitionHeight > triggerDistance) {
            _getRefresh(2);
            // console.log("触发更新")
            (window as any).events.emit('pulldownrefresh');
          }
          setTimeout(() => {
            _startPos = 0;
            _transitionHeight = 0;
          }, 2000);
        };
        _element.addEventListener('touchend', this.cb3, true);
      }
    };

    /**
     * 关闭手动下拉
     */
    const disablePullDownRefresh = () => {
      const _element = document.body;
      if (this.cb1) {
        _element.removeEventListener('touchstart', this.cb1);
        this.cb1 = undefined;
      }
      if (this.cb2) {
        _element.removeEventListener('touchmove', this.cb2);
        this.cb2 = undefined;
      }
      if (this.cb3) {
        _element.removeEventListener('touchend', this.cb3);
        this.cb3 = undefined;
      }
    };

    this.enablePullDownRefresh = enablePullDownRefresh;
    this.disablePullDownRefresh = disablePullDownRefresh;
  }
}
/**
 * 开启手动下拉刷新
 */
const onPullDownRefresh = normalizeSwitch(({
  pullRefresh = true, triggerDistance = 90, success = () => {}, fail = () => {}, complete = () => {},
}) => {
  try {
    if (!(window as any).events) {
      (window as any).events = new Events();
    }
    const pullDownRefresh = new PullDownRefresh();
    if (pullRefresh) {
      pullDownRefresh.enablePullDownRefresh(triggerDistance);
    } else {
      pullDownRefresh.disablePullDownRefresh();
    }

    success();
    complete();
  } catch (error) {
    fail();
    complete();
  }
}, CONTAINER_NAME.WEB);

export default onPullDownRefresh;
