export interface ToastOption {
  SHORT: number;
  LONG: number;
  show: (message: string, duration?: number, options?: object) => void;
  hide: () => void;
};
