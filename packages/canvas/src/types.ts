export type CanvasContext = { draw?: () => void } & RenderingContext;
export interface Canvas {
  createContext: (
    selector: string,
    type: string,
    options: object
  ) => Promise<CanvasContext>;
}

export interface ContextAttributes {
  antialias?: boolean,
  depth?: boolean,
  alpha?: boolean,
  willReadFrequently?: boolean,
  storage?: string,
  failIfMajorPerformanceCaveat?: boolean,
  powerPreference?: string,
  premultipliedAlpha?: boolean,
  preserveDrawingBuffer?: boolean,
  stencil?: boolean
}
