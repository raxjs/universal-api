export type CanvasContext = { draw?: () => void } & RenderingContext;

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
