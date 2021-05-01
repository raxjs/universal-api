import {
  normalizeSwitch
} from '../common';
import {
  CONTAINER_NAME
} from '@utils/constant';
import Events from '@utils/event';

declare let window: any;
if (!window.events) {
  window.events = new Events();
}

const clsPrefix = '__universal_pulldownrefresh';

const styles = `#${clsPrefix}_refreshText {
  position: relative;
  width: 100%;
  line-height: 100rpx;
  text-align: center;
  left: 0;
  top: 0;
}`.replace(/\n/g, '');

let styleElement: HTMLElement | null = null;
let cb1: (params) => void, cb2: (params) => void, cb3: (params) => void;

const _enablePullDownRefresh = () => {
  let _element = document.body,
    _refreshText = document.getElementById(`${clsPrefix}_refreshText`),
    _startPos = 0,
    _transitionHeight = 0;
  if (!cb1) {
    cb1 = function(e) {
      // console.log('初始位置：', e.touches[0].pageY);
      _startPos = e.touches[0].pageY;
      if (!_refreshText) {
        _refreshText = document.createElement('div');
        _refreshText.id = `${clsPrefix}_refreshText`;
      }
      _element.insertBefore(_refreshText, _element.firstElementChild);
    };
    _element.addEventListener('touchstart', cb1, true);
  }; 
  if (!cb2) {
      cb2 = function(e) {
      // console.log('当前位置：', e.touches[0].pageY);
      _transitionHeight = e.touches[0].pageY - _startPos;
      // console.log(_transitionHeight)
      if (_transitionHeight > 0 && _transitionHeight < 100) {
        _refreshText.innerText = '下拉刷新';
      }
    }
    _element.addEventListener('touchmove', cb2, true);
  };
  if (!cb3) {
    cb3 = function(e) {
      if (_transitionHeight > 90) {
        _refreshText.innerText = '更新中...';
        // console.log("触发更新")
        window.events.emit('pulldownrefresh');
      }
      setTimeout(() => {
        _startPos = 0;
        _transitionHeight = 0;
        // _refreshText = document.getElementById(`${clsPrefix}_refreshText`);
        // if (_refreshText) {
        //   document.body.removeChild(_refreshText);
        //   _refreshText = undefined;
        // }
      }, 2000);
    };
    _element.addEventListener('touchend', cb3, true);
  } 
}

const _disablePullDownRefresh = () => {
  let _element = document.body;
  if (cb1) {
    _element.removeEventListener('touchstart', cb1);
    cb1 = undefined;
  }
  if (cb2) {
    _element.removeEventListener('touchmove', cb2);
    cb2 = undefined;
  }
  if (cb3) {
    _element.removeEventListener('touchend', cb3);
    cb3 = undefined;
  }
}

export const onPullDownRefresh = normalizeSwitch(({
  pullRefresh = true,
}) => {
  try {
    if (!styleElement) {
      // create a style tag for keyframes
      styleElement = document.createElement('style');
      styleElement.innerHTML = styles;
      document.body.appendChild(styleElement);
    }
    // console.log(pullRefresh);
    if (pullRefresh) {
      _enablePullDownRefresh();
    }
    else {
      _disablePullDownRefresh();
    }
  } catch (error) {
  }
}, CONTAINER_NAME.WEB);

export default onPullDownRefresh;
