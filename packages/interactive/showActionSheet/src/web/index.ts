import { initApi } from '../common';

const clsPrefix = '__universal_actionsheet';

const styles = `.${clsPrefix} {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  color: #000;
  box-sizing: border-box;
  border-radius: 12px 12px 0 0;
  transform: translateY(100%);
  -webkit-transform: translateY(100%);
  z-index: 9999;
  outline: none;
  text-align: center;
  animation-duration: .3s;
  animation-fill-mode: both;
}
.${clsPrefix}_mask {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  display: block;
  z-index: 9999;
  background: #000;
  opacity: 0;
  animation-duration: .3s;
  animation-fill-mode: both;
}
.${clsPrefix}_item {
  padding: 16px 0;
  border-bottom: 1px solid #eee;
}
.${clsPrefix}_cancel {
  padding: 16px 0;
  border-top: 10px solid #eee;
}
@keyframes ${clsPrefix}_slideIn {
  0% {
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
}
@keyframes ${clsPrefix}_slideOut {
  0% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
  }
}
@keyframes ${clsPrefix}_fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: .6;
  }
}
@keyframes ${clsPrefix}_fadeOut {
  0% {
    opacity: .6;
  }
  100% {
    opacity: 0;
  }
}`.replace(/\n/g, '');

let styleElement: HTMLElement | null = null;

let actionSheetElement: HTMLElement | null = null;

let hideFn: Function = () => {};

const showActionSheet = (args) => {
  try {
    if (!styleElement) {
      // create a style tag for keyframes
      styleElement = document.createElement('style');
      styleElement.innerHTML = styles;
      document.body.appendChild(styleElement);
    }

    if (!actionSheetElement) {
      // create a actionsheet element
      actionSheetElement = document.createElement('div');

      // create a mask element
      const maskEle = document.createElement('div');
      maskEle.className = `${clsPrefix}_mask`;
      maskEle.addEventListener('click', () => {
        hideFn(() => {
          args.success({tapIndex: -1});
          args.complete({tapIndex: -1});
        });
      });
      actionSheetElement.appendChild(maskEle);

      // create container element
      const containerEle = document.createElement('div');
      containerEle.className = clsPrefix;
      // add all item element
      const items = args.itemList || [];
      for (let index = 0; index < items.length; index++) {
        const itemEle = document.createElement('div');
        itemEle.className = `${clsPrefix}_item`;

        itemEle.innerText = items[index];
        // support for ARIA, add tabindex for focus
        // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex
        itemEle.setAttribute('tabindex', index + '');
        itemEle.addEventListener('click', () => {
          hideFn(() => {
            args.success({tapIndex: index});
            args.complete({tapIndex: index});
          });
        });
        containerEle.appendChild(itemEle);
      }

      // add cancel element
      const cancelEle = document.createElement('div');
      cancelEle.className = `${clsPrefix}_cancel`;
      cancelEle.innerText = '取消';
      cancelEle.setAttribute('tabindex', '-1');
      cancelEle.addEventListener('click', () => {
        hideFn(() => {
          args.success({tapIndex: -1});
          args.complete({tapIndex: -1});
        });
      });
      containerEle.appendChild(cancelEle);

      actionSheetElement.appendChild(containerEle);

      document.body.appendChild(actionSheetElement);

      maskEle.style.animationName = `${clsPrefix}_fadeIn`;
      containerEle.style.animationName = `${clsPrefix}_slideIn`;

      hideFn = (callback) => {
        maskEle.style.animationName = `${clsPrefix}_fadeOut`;
        containerEle.style.animationName = `${clsPrefix}_slideOut`;
        setTimeout(() => {
          document.body.removeChild(actionSheetElement);
          actionSheetElement = null;
          callback();
        }, 300);
      };
    }
  } catch (err) {
    args.fail(err);
    args.complete(err);
  }
};

export default initApi(showActionSheet);
