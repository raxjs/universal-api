import { CONTAINER_NAME } from '@uni/utils';
import { CanvasContext, Options } from '../types';
import { normalize } from '../common';

const createContext = normalize((canvasOptions: Options): Promise<CanvasContext> => {
  const {
    canvasId,
    type = '2d',
    options,
  } = canvasOptions;
  return new Promise((resolve, reject) => {
    const query = tt.createSelectorQuery();
    query.select(`#${canvasId}`).node().exec((res) => {
      if (!res[0] || !res[0].node) reject(new Error('The canvas node may not exist.'));
      const canvasNode: HTMLCanvasElement = res[0].node;
      const canvasContext: any = canvasNode.getContext(type, options); // For fallback

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
      }; // 字节没有该方法
      // const _strokeText = canvasContext.strokeText;
      // canvasContext.strokeText = (...args) => {
      //   _strokeText.apply(canvasContext, args);
      //   canvasContext.draw(true);
      // };


      Object.defineProperty(canvasContext, 'fillStyle', {
        get() {
          return canvasContext.setFillStyle;
        },

        set(value) {
          canvasContext.setFillStyle(value);
        },

      });
      Object.defineProperty(canvasContext, 'strokeStyle', {
        get() {
          return canvasContext.setStrokeStyle;
        },

        set(value) {
          canvasContext.setStrokeStyle(value);
        },

      });
      Object.defineProperty(canvasContext, 'fontSize', {
        get() {
          return canvasContext.setFontSize;
        },

        set(value) {
          canvasContext.setFontSize(value);
        },

      });
      Object.defineProperty(canvasContext, 'globalAlpha', {
        get() {
          return canvasContext.setGlobalAlpha;
        },

        set(value) {
          canvasContext.setGlobalAlpha(value);
        },

      });
      Object.defineProperty(canvasContext, 'lineWidth', {
        get() {
          return canvasContext.setLineWidth;
        },

        set(value) {
          canvasContext.setLineWidth(value);
        },

      });
      Object.defineProperty(canvasContext, 'lineCap', {
        get() {
          return canvasContext.setLineCap;
        },

        set(value) {
          canvasContext.setLineCap(value);
        },

      });
      Object.defineProperty(canvasContext, 'lineJoin', {
        get() {
          return canvasContext.setLineJoin;
        },

        set(value) {
          canvasContext.setLineJoin(value);
        },

      });
      Object.defineProperty(canvasContext, 'miterLimit', {
        get() {
          return canvasContext.setMiterLimit;
        },

        set(value) {
          canvasContext.setMiterLimit(value);
        },

      });
      Object.defineProperty(canvasContext, 'textAlign', {
        get() {
          return canvasContext.setTextAlign;
        },

        set(value) {
          canvasContext.setTextAlign(value);
        },

      });
      Object.defineProperty(canvasContext, 'textBaseLine', {
        get() {
          return canvasContext.setTextBaseLine;
        },

        set(value) {
          canvasContext.setTextBaseLine(value);
        },

      });
      resolve(canvasContext);
    });
  });
}, CONTAINER_NAME.BYTE);
export default createContext;
