import { CONTAINER_NAME } from '@uni/utils';
import { CanvasContext, Options } from '../types';
import { normalize } from '../common';
import { isLessThanVersion } from '@utils/tools';

const createContext = normalize((canvasOptions: Options): Promise<CanvasContext> => {
  const {
    canvasId,
    type = '2d',
  } = canvasOptions;

  if (isLessThanVersion(my.SDKVersion, '2.7.0')) {
    return new Promise((resolve) => {
      const canvasContext = my.createCanvasContext(canvasId);
      const _clearRect = canvasContext.clearRect;

      canvasContext.clearRect = (...args) => {
        _clearRect.apply(canvasContext, args);

        canvasContext.draw(true);
      };

      const _fill = canvasContext.fill;

      canvasContext.fill = (...args) => {
        _fill.apply(canvasContext, args);

        canvasContext.draw(true);
      };

      const _fillRect = canvasContext.fillRect;

      canvasContext.fillRect = (...args) => {
        _fillRect.apply(canvasContext, args);

        canvasContext.draw(true);
      };

      const _fillText = canvasContext.fillText;

      canvasContext.fillText = (...args) => {
        _fillText.apply(canvasContext, args);

        canvasContext.draw(true);
      };

      const _stroke = canvasContext.stroke;

      canvasContext.stroke = (...args) => {
        _stroke.apply(canvasContext, args);

        canvasContext.draw(true);
      };

      const _strokeRect = canvasContext.strokeRect;

      canvasContext.strokeRect = (...args) => {
        _strokeRect.apply(canvasContext, args);

        canvasContext.draw(true);
      };

      const _strokeText = canvasContext.strokeText;

      canvasContext.strokeText = (...args) => {
        _strokeText.apply(canvasContext, args);

        canvasContext.draw(true);
      };

      Object.defineProperty(canvasContext, 'fillStyle', {
        get() {
          return canvasContext.setFillStyle;
        },

        set(value) {
          canvasContext.setFillStyle(value);
        },

      });
      resolve(canvasContext);
    });
  } else {
    // 仅 2.7.0+ 基础库版本支持
    return new Promise((resolve, reject) => {
      const query = my.createSelectorQuery();
      query.select(`#${canvasId}`).node().exec((res) => {
        if (!res[0] || !res[0].node) reject(new Error('The canvas node may not exist.'));
        const canvasNode: HTMLCanvasElement = res[0].node;
        const canvasContext: CanvasContext = canvasNode.getContext(type);
        resolve(canvasContext);
      });
    });
  }
}, CONTAINER_NAME.ALIPAY);
export default createContext;
