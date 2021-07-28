import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';
import { PreviewImageOptions } from '../types';

const clsPrefix = '__universal_preview_image';

const styles = `.${clsPrefix} {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  text-align: center;
  background: #000;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  animation-duration: .3s;
  animation-fill-mode: both;
}
.${clsPrefix}_pageindex {
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  font-size: 16px;
  z-index: 2;
}
.${clsPrefix}_swiper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  transition-property: transform;
  box-sizing: content-box;
}
.${clsPrefix}_item {
  max-height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  position: relative;
  transition-property: transform;
  overflow: hidden;
}
.${clsPrefix}_img {
  width: 100%;
}
@keyframes ${clsPrefix}_fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes ${clsPrefix}_fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}`.replace(/\n/g, '');

let styleElement: HTMLElement | null = null;

const previewImage = normalize.previewImage((args: PreviewImageOptions) => {
  const { urls = [] } = args || {};
  let { current = 0 } = args || {};

  if (Object.prototype.toString.call(urls) !== '[object Array]') {
    throw new Error('the arguments must contain urls that type is a Array');
  }

  if (urls.length <= 0) {
    throw new Error('the urls`s length is at least 1');
  }

  if (!Number.isSafeInteger(current)) {
    throw new Error('the current must be a safe integer');
  }

  current = Math.min(Math.max(current, 0), urls.length - 1);

  if (!styleElement) {
    // create a style tag for keyframes
    styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.body.appendChild(styleElement);
  }

  let containerEle = document.createElement('div');
  containerEle.className = clsPrefix;
  containerEle.style.animationName = `${clsPrefix}_fadeIn`;

  containerEle.addEventListener('click', () => {
    containerEle.style.animationName = `${clsPrefix}_fadeOut`;
    setTimeout(() => {
      document.body.removeChild(containerEle);
      containerEle = null;
    }, 300);
  });

  const pageIndexEle = document.createElement('div');
  pageIndexEle.className = `${clsPrefix}_pageindex`;
  pageIndexEle.innerText = `${current + 1}/${urls.length}`;
  containerEle.appendChild(pageIndexEle);

  const swiperEle = document.createElement('div');
  swiperEle.className = `${clsPrefix}_swiper`;

  const damp = 1;
  const { clientWidth } = document.documentElement;
  let startX = 0;
  swiperEle.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      e.stopPropagation();
      e.preventDefault();
    }
    startX = e.targetTouches[0].pageX;
  });
  swiperEle.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
      e.stopPropagation();
      e.preventDefault();
    }
    const moveX = e.targetTouches[0].pageX - startX;
    swiperEle.style.transform = `translateX(${-clientWidth * current + moveX * damp}px)`;
  });
  swiperEle.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].pageX - startX;
    if (Math.abs(endX * damp) > clientWidth / 2) {
      current = endX < 0 ? Math.min(current + 1, urls.length - 1) : Math.max(current - 1, 0);
    }
    pageIndexEle.innerText = `${current + 1}/${urls.length}`;
    const transitionDuration = 300;
    swiperEle.style.transitionDuration = `${transitionDuration}ms`;
    swiperEle.style.transform = `translateX(${-clientWidth * current}px)`;
    setTimeout(() => {
      swiperEle.style.transitionDuration = '0ms';
    }, transitionDuration);
  });
  swiperEle.style.transform = `translateX(${-clientWidth * current}px)`;
  containerEle.appendChild(swiperEle);

  urls.forEach((url) => {
    const swiperItemEle: any = document.createElement('div');
    swiperItemEle.className = `${clsPrefix}_item`;
    swiperItemEle.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    swiperEle.appendChild(swiperItemEle);

    const imageEle = document.createElement('img');
    imageEle.className = `${clsPrefix}_img`;
    imageEle.src = url;
    swiperItemEle.appendChild(imageEle);

    swiperItemEle.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.stopPropagation();
        e.preventDefault();
        const point1 = e.touches[0];
        const point2 = e.touches[1];
        const xLen = Math.abs(point2.pageX - point1.pageX);
        const yLen = Math.abs(point2.pageY - point1.pageY);
        swiperItemEle.touchDistance = Math.sqrt(xLen * xLen + yLen * yLen);
      } else {
        swiperItemEle.touched = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY,
        };
      }
    });
    swiperItemEle.addEventListener('touchmove', (e) => {
      if (e.touches.length > 1) {
        e.stopPropagation();
        e.preventDefault();
        const xLen = Math.abs(e.touches[0].pageX - e.touches[1].pageX);
        const yLen = Math.abs(e.touches[1].pageY - e.touches[1].pageY);
        const touchDistance = Math.sqrt(xLen * xLen + yLen * yLen);

        if (swiperItemEle.touchDistance) {
          const pinchScale = (swiperItemEle.previousPinchScale || 1) + (touchDistance - swiperItemEle.touchDistance) / swiperItemEle.touchDistance;
          const imageScale = Math.max(1, pinchScale);
          imageEle.style.transform = `scale(${imageScale})`;
          swiperItemEle.previousPinchScale = imageScale;
        }
        swiperItemEle.touchDistance = touchDistance;
      } else if (swiperItemEle.previousPinchScale > 1) {
        e.stopPropagation();
        const x = (swiperItemEle.preX || 0) + (e.touches[0].pageX - swiperItemEle.touched.x);
        const y = (swiperItemEle.preY || 0) + (e.touches[0].pageY - swiperItemEle.touched.y);
        imageEle.style.transform = `scale(${swiperItemEle.previousPinchScale}) translate(${x}px, ${y}px)`;
        swiperItemEle.preX = x;
        swiperItemEle.preY = y;
        swiperItemEle.touched = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY,
        };
      }
    });
  });

  document.body.appendChild(containerEle);
}, CONTAINER_NAME.WEB);

export default previewImage;
