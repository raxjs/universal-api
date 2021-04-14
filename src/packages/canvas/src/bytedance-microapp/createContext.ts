import { CanvasContext, Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const createContext = normalize((canvasOptions: Options): Promise<CanvasContext> => {
  const { canvasId, type = '2d', options } = canvasOptions;
  return new Promise((resolve, reject) => {
    const query = tt.createSelectorQuery();
    query
      .select(`#${canvasId}`)
      .node()
      .exec((res) => {
        if (!res[0] || !res[0].node) reject(new Error('The canvas node may not exist.'));
        const canvasNode: HTMLCanvasElement = res[0].node;
        const context: CanvasContext = canvasNode.getContext(type, options);
        // For fallback
        resolve(context);
      });
  });
}, CONTAINER_NAME.BYTE);

export default createContext;
