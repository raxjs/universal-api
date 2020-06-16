export type CanvasContext = { draw?: () => void } & RenderingContext;
export interface Canvas {
  createContext: (
    selector: string,
    type: string,
    options: object
  ) => Promise<CanvasContext>;
}
