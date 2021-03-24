import { ConfirmOptions } from '../types';
import { normalize } from '../common';

const clsPrefix = '__universal_confirm';

const styles = `.${clsPrefix} {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  background: #fff;
  color: #000;
  box-sizing: border-box;
  border-radius: 12px;
  z-index: 9999;
  outline: none;
  text-align: center;
  width: 280px;
  opacity: 0;
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
.${clsPrefix}_title {
  padding: 28px 16px 16px;
  font-weight: bold;
}
.${clsPrefix}_content {
  color: #666;
  padding: 0 16px;
  margin-bottom: 28px;
  word-break: break-all;
  max-height: 200px;
  overflow: scroll;
}
.${clsPrefix}_cancel {
  display: inline-block;
  font-weight: bold;
  padding: 14px 0;
  width: 50%;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
}
.${clsPrefix}_confirm {
  display: inline-block;
  font-weight: bold;
  color: #576B95;
  padding: 14px 0;
  width: 50%;
  box-sizing: border-box;
  border-top: 1px solid #eee;
}
@keyframes ${clsPrefix}_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes ${clsPrefix}_out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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

let confirmElement: HTMLElement | null = null;

let hideFn: Function = () => {};

const confirm = (args: ConfirmOptions) => {
  try {
    if (!styleElement) {
      // create a style tag for keyframes
      styleElement = document.createElement('style');
      styleElement.innerHTML = styles;
      document.body.appendChild(styleElement);
    }

    if (!confirmElement) {
      // create a actionsheet element
      confirmElement = document.createElement('div');

      // create a mask element
      const maskEle = document.createElement('div');
      maskEle.className = `${clsPrefix}_mask`;
      confirmElement.appendChild(maskEle);

      // create container element
      const containerEle = document.createElement('div');
      containerEle.className = clsPrefix;

      // add title
      const titleEle = document.createElement('div');
      titleEle.className = `${clsPrefix}_title`;
      titleEle.innerText = args.title;
      containerEle.appendChild(titleEle);

      // add content
      const contentEle = document.createElement('div');
      contentEle.className = `${clsPrefix}_content`;
      contentEle.innerText = args.content;
      containerEle.appendChild(contentEle);

      // add operators
      const operateEle = document.createElement('div');

      // add cancelButton
      if (args.showCancel !== false) {
        const cancelButton = document.createElement('div');
        cancelButton.className = `${clsPrefix}_cancel`;
        cancelButton.innerText = args.cancelText;
        cancelButton.setAttribute('tabindex', '-1');
        cancelButton.addEventListener('click', () => {
          hideFn(() => {
            args.success({confirm: false});
            args.complete({confirm: false});
          });
        });
        operateEle.appendChild(cancelButton);
      }

      // add confirmButton
      const confirmButton = document.createElement('div');
      confirmButton.className = `${clsPrefix}_confirm`;
      if (args.showCancel === false) {
        confirmButton.style.width = '100%';
      }
      confirmButton.innerText = args.confirmText;
      confirmButton.setAttribute('tabindex', '-1');
      confirmButton.addEventListener('click', () => {
        hideFn(() => {
          args.success({confirm: true});
          args.complete({confirm: true});
        });
      });
      operateEle.appendChild(confirmButton);

      containerEle.appendChild(operateEle);
      confirmElement.appendChild(containerEle);

      document.body.appendChild(confirmElement);

      maskEle.style.animationName = `${clsPrefix}_fadeIn`;
      containerEle.style.animationName = `${clsPrefix}_in`;

      hideFn = (callback) => {
        maskEle.style.animationName = `${clsPrefix}_fadeOut`;
        confirmElement.removeChild(containerEle);
        setTimeout(() => {
          document.body.removeChild(confirmElement);
          confirmElement = null;
          callback();
        }, 300);
      };
    }
  } catch (err) {
    args.fail(err);
    args.complete(err);
  }
};

export default normalize(confirm);
