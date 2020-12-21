import { CanvasContext } from '../types';

function createContext(selector: string): Promise<CanvasContext> {
  return new Promise((resolve) => {
    const context = tt.createCanvasContext(selector);
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
}

export default createContext;
