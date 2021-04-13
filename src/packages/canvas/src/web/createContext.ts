import { CanvasContext, Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const createContext = normalize((canvasOptions: Options): Promise<CanvasContext> => {
  const { canvasId, type = '2d', options } = canvasOptions;
  return new Promise((resolve, reject) => {
    const canvasNode: HTMLCanvasElement = document.getElementById(
      canvasId,
    ) as HTMLCanvasElement;
    if (!canvasNode) reject(new Error('The canvas node may not exist.'));
    const context: CanvasContext = canvasNode.getContext(type, options);
    // For fallback
    context.draw = function () {};
    resolve(context);
  });
}, CONTAINER_NAME.WEB);

export default createContext;
