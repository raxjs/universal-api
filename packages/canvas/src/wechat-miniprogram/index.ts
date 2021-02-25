import { CanvasContext, Options } from '../types';

export const createContext = function(canvasOptions: Options): Promise<CanvasContext> {
  const {canvasId, type = '2d', context = wx, options} = canvasOptions;
  return new Promise((resolve, reject) => {
    const query = context.createSelectorQuery();
    query
      .select(`#${canvasId}`)
      .node()
      .exec((res) => {
        if (!res[0] || !res[0].node) reject('The canvas node may not exist.');
        const canvasNode: HTMLCanvasElement = res[0].node;
        const context: CanvasContext = canvasNode.getContext(type, options);
        // For fallback
        // context.draw = function() {};
        resolve(context);
      });
  });
};

export default { createContext };
