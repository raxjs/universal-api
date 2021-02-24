export type CanvasContext = { draw?: () => void } & RenderingContext;

export interface ContextAttributes {
  antialias?: boolean;
  depth?: boolean;
  alpha?: boolean;
  willReadFrequently?: boolean;
  storage?: string;
  failIfMajorPerformanceCaveat?: boolean;
  powerPreference?: string;
  premultipliedAlpha?: boolean;
  preserveDrawingBuffer?: boolean;
  stencil?: boolean;
}
export interface Options {
  canvasId: string;
  type?: '2d' | 'webgl' | 'webgl2';
  context?: any;
  options?: ContextAttributes;
}
export interface Canvas {
  createContext: (options: Options) => Promise<CanvasContext>;
}
