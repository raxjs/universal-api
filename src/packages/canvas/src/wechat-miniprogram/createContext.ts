import { CanvasContext, Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const createContext = normalize((canvasOptions: Options): Promise<CanvasContext> => {
  // 使用微信的 getContext 方法可以获取 CanvasRenderingContext2D，对齐html canvas 2d context
  const { canvasId, type = '2d', context = wx, options } = canvasOptions;
  return new Promise((resolve, reject) => {
    const query = context.createSelectorQuery();
    query
      .select(`#${canvasId}`)
      .fields({ node: true, size: true })
      .exec((res) => {
        if (!res[0] || !res[0].node) reject(new Error('The canvas node may not exist.'));
        const canvasNode: HTMLCanvasElement = res[0].node;
        const canvasContext: CanvasContext = canvasNode.getContext(type, options);
        // For fallback
        // context.draw = function() {};
        resolve(canvasContext);
      });
  });
}, CONTAINER_NAME.WECHAT);

export default createContext;
