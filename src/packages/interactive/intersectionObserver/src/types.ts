export interface OPTIONS {
  thresholds?: Array<number>;
  initialRatio?: number;
  selectAll?: boolean;
}

export interface RECT {
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
}

export interface INSECTION_RECT extends RECT {
  width?: number;
  height?: number;
}

export interface CallbackOptions {
  intersectionRatio: number;
  intersectionRect: INSECTION_RECT;
  boundingClientRect: INSECTION_RECT;
  relativeRect: RECT;
  time: number;
}

export interface IntersectionObserver {
  relativeTo: (selector: string, margins?: RECT) => IntersectionObserver;
  relativeToViewport: (margins?: RECT) => IntersectionObserver;
  observe: (targetSelector: string, callback: (res: CallbackOptions) => any) => IntersectionObserver;
  disconnect: () => void;
}

export type CreateIntersectionObserver = (component?: any, options?: OPTIONS) => IntersectionObserver;
