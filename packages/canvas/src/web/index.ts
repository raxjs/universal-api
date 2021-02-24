import { CanvasContext, Options } from '../types';

export const createContext = function(canvasOptions: Options): Promise<CanvasContext> {
  const { canvasId, type = '2d', options } = canvasOptions;
  return new Promise((resolve, reject) => {
    const canvasNode: HTMLCanvasElement = document.getElementById(
      canvasId
    ) as HTMLCanvasElement;
    if (!canvasNode) reject('The canvas node may not exist.');
    const context: CanvasContext = canvasNode.getContext(type, options);
    // For fallback
    context.draw = function() {};
    resolve(context);
  });
};

export default { createContext };
