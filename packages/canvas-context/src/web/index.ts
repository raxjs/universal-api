import { CanvasContext, ContextAttributes } from '../types'

function createContext(
  selector: string,
  type: string = '2d',
  options: ContextAttributes = {}
): Promise<CanvasContext> {
  return new Promise((resolve, reject) => {
    const canvasNode: HTMLCanvasElement = document.getElementById(
      selector
    ) as HTMLCanvasElement;
    if (!canvasNode) reject('The canvas node may not exist.');
    const context :CanvasContext = canvasNode.getContext(type, options);
    // For fallback
    context.draw = function() {};
    resolve(context);
  });
}

export default createContext;
