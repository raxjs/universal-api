import { CanvasContext, ContextAttributes } from '../types'

declare const wx: any;

function createContext(
  selector: string,
  type: string = '2d',
  options: ContextAttributes = {}
): Promise<CanvasContext> {
  return new Promise((resolve, reject) => {
    const query = wx.createSelectorQuery();
    query
      .select(`#${selector}`)
      .fields({ node: true, size: true })
      .exec((res) => {
        if (!res[0] || !res[0].node) reject('The canvas node may not exist.');
        const canvasNode :HTMLCanvasElement = res[0].node;
        const context :CanvasContext = canvasNode.getContext(type, options);
        // For fallback
        context.draw = function() {};
        resolve(context);
      });
  });
}

export default createContext;
