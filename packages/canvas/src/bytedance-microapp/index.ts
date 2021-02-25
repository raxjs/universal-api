import { CanvasContext, Options } from '../types';

export const createContext = function (canvasOptions: Options): Promise<CanvasContext> {
  const { canvasId, type = '2d', options } = canvasOptions;
  return new Promise((resolve, reject) => {
    const query = tt.createSelectorQuery();
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
    // const context = tt.createCanvasContext(selector);
    // Object.defineProperty(context, 'fillStyle', {
    //   get() {
    //     return context.setFillStyle;
    //   },
    //   set(value) {
    //     context.setFillStyle(value);
    //   },
    // });
    // resolve(context);
  });
};

export default { createContext };
