import { CONTAINER_NAME } from '@uni/utils';
import { CanvasContext, Options } from '../types';
import { normalize } from '../common';

export const createContext = normalize((canvasOptions: Options): Promise<CanvasContext> => {
  // 使用微信的 getContext 方法可以获取 CanvasRenderingContext2D，对齐html canvas 2d context
  const {
    canvasId,
    type = '2d',
    context = ks,
    options,
  } = canvasOptions;
  return new Promise((resolve, reject) => {
    const query = context.createSelectorQuery();
    query.select(`#${canvasId}`).fields({
      node: true,
      size: true,
    }).exec((res) => {
      if (!res[0] || !res[0].node) reject(new Error('The canvas node may not exist.'));
      const canvasNode: HTMLCanvasElement = res[0].node;
      const canvasContext: any = canvasNode.getContext(type, options); // For fallback
      // context.draw = function() {};

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

      resolve(canvasContext);
    });
  });
}, CONTAINER_NAME.KWAI);
export default createContext; // export default () => {};
