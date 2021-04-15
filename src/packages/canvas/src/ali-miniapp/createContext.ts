import { CanvasContext, Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const createContext = normalize((canvasOptions: Options): Promise<CanvasContext> => {
  const { canvasId } = canvasOptions;
  return new Promise((resolve) => {
    const context = my.createCanvasContext(canvasId);
    const _fillRect = context.fillRect;
    context.fillRect = (...args) => {
      _fillRect.apply(context, args);
      context.draw();
    };
    Object.defineProperty(context, 'fillStyle', {
      get() {
        return context.setFillStyle;
      },
      set(value) {
        context.setFillStyle(value);
      },
    });
    resolve(context);
  });
}, CONTAINER_NAME.ALIPAY);

export default createContext;
