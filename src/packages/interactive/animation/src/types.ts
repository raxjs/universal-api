/// <reference path='../../../../../types/interface.d.ts'/>

type TimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end' | string;

export interface AnimationOptions extends Uni.COptions {
  duration?: number;

  timingFunction?: TimingFunction;

  delay?: number;

  transformOrigin?: string;
}

interface AnimationData {
  actions: Array<{
    animates: Array<{
      type: 'style' | 'rotate' | 'scale' | 'translate' | 'skew' | 'matrix';
      args: any[];
    }>;
    option: {
      transformOrigin: string;
      transition: {
        delay: number;
        duration: number;
        timingFunction: TimingFunction;
      };
    };
  }>;
}

export interface Animation {
  /* ************* util ************* */
  export: () => AnimationData;

  step: (options: AnimationOptions) => Animation;

  /* ************* style ************* */
  opacity: (value: number) => Animation;

  backgroundColor: (value: string) => Animation;

  width: (value: number | string) => Animation;

  height: (value: number | string) => Animation;

  left: (value: number | string) => Animation;

  right: (value: number | string) => Animation;

  top: (value: number | string) => Animation;

  bottom: (value: number | string) => Animation;

  /* ************* rotate ************* */
  rotate: (angle: number) => Animation;

  rotate3d: (x: number, y: number, z: number, angle: number) => Animation;

  rotateX: (angle: number) => Animation;

  rotateY: (angle: number) => Animation;

  rotateZ: (angle: number) => Animation;

  /* ************* scale ************* */
  scale: (sx: number, sy: number) => Animation;

  scale3d: (sx: number, sy: number, sz: number) => Animation;

  scaleX: (scale: number) => Animation;

  scaleY: (scale: number) => Animation;

  scaleZ: (scale: number) => Animation;

  /* ************* translate ************* */
  translate: (tx: number, ty: number) => Animation;

  translate3d: (tx: number, ty: number, tz: number) => Animation;

  translateX: (translation: number) => Animation;

  translateY: (translation: number) => Animation;

  translateZ: (translation: number) => Animation;

  /* ************* skew ************* */
  skew: (ax: number, ay: number) => Animation;

  skewX: (angle: number) => Animation;

  skewY: (angle: number) => Animation;

  /* ************* matrix ************* */
  matrix: () => (
    a: number, b: number, c: number, d: number,
    tx: number, ty: number
  ) => Animation;

  matrix3d: () => (
    a1: number, b1: number, c1: number, d1: number,
    a2: number, b2: number, c2: number, d2: number,
    a3: number, b3: number, c3: number, d3: number,
    a4: number, b4: number, c4: number, d4: number
  ) => Animation;
}
