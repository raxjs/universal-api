/// <reference path='../../../../../types/interface.d.ts'/>

type TimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end' | string;

export interface AnimationOptions extends Uni.COptions {
  duration?: number;

  timingFunction?: TimingFunction;

  delay?: number;

  transformOrigin?: string;
}

export interface AnimationActionAnimate {
  type: 'style'
  | 'rotate' | 'rotate3d' | 'rotateX' | 'rotateY' | 'rotateZ'
  | 'scale' | 'scale3d' | 'scaleX' | 'scaleY' | 'scaleZ'
  | 'translate' | 'translate3d' | 'translateX' | 'translateY' | 'translateZ'
  | 'skew' | 'skewX' | 'skewY'
  | 'matrix' | 'matrix3d';
  args: any[];
}

export interface AnimationAction {
  animates: AnimationActionAnimate[];
  option: {
    transformOrigin: string;
    transition: {
      delay: number;
      duration: number;
      timingFunction: TimingFunction;
    };
  };
}

export interface AnimationData {
  actions: AnimationAction[];
}

export interface Animation {

  /* ******************* util ******************* */

  /**
   * Export the animation queue, the previous animation data will be cleared after each call of the `export` method.
   * If you need to support the web platform, the parameter `dom` needs to be passed in, otherwise you don’t need to pass in.
   * @param dom
   */
  export: (dom?: HTMLElement) => AnimationData;

  /**
   * Indicates that a set of animations are completed.
   * Any number of animation methods can be called in a group of animations, all animations in a group of animations will start at the same time,
   * and the next group of animations will be executed after a group of animations are completed.
   * @param options Same as the parameters of the `createAnimation` method
   */
  step: (options?: AnimationOptions) => Animation;


  /* ******************* style ******************* */

  /**
   * Set opacity
   * @param value
   */
  opacity: (value: number) => Animation;

  /**
   * Set background color
   * @param value
   */
  backgroundColor: (value: string) => Animation;

  /**
   * Set width
   * @param value
   */
  width: (value: number | string) => Animation;

  /**
   * Set height
   * @param value
   */
  height: (value: number | string) => Animation;

  /**
   * Set the `left` value
   * @param value
   */
  left: (value: number | string) => Animation;

  /**
   * Set the `right` value
   * @param value
   */
  right: (value: number | string) => Animation;

  /**
   * Set the `top` value
   * @param value
   */
  top: (value: number | string) => Animation;

  /**
   * Set the `bottom` value
   * @param value
   */
  bottom: (value: number | string) => Animation;


  /* ******************* rotate ******************* */

  /**
   * Rotate an angle clockwise from the origin
   * @param angle
   */
  rotate: (angle: number) => Animation;

  /**
   * Rotate one angle clockwise from the X axis
   * @param angle
   */
  rotateX: (angle: number) => Animation;

  /**
   * Rotate one angle clockwise from the Y axis
   * @param angle
   */
  rotateY: (angle: number) => Animation;

  /**
   * Rotate one angle clockwise from the Z axis
   * @param angle
   */
  rotateZ: (angle: number) => Animation;

  /**
   * Rotate one angle clockwise from the fixed axis
   * @param x
   * @param y
   * @param z
   * @param angle
   */
  rotate3d: (x: number, y: number, z: number, angle: number) => Animation;


  /* ******************* scale ******************* */

  /**
   * Scale X and Y axes
   * @param sx
   * @param sy
   */
  scale: (sx: number, sy: number) => Animation;

  /**
   * Scale X axes
   * @param scale
   */
  scaleX: (scale: number) => Animation;

  /**
   * Scale Y axes
   * @param scale
   */
  scaleY: (scale: number) => Animation;

  /**
   * Scale Z axes
   * @param scale
   */
  scaleZ: (scale: number) => Animation;

  /**
   * Scale X, Y and Z axis
   * @param sx
   * @param sy
   * @param sz
   */
  scale3d: (sx: number, sy: number, sz: number) => Animation;


  /* ******************* translate ******************* */

  /**
   * Translate transformation
   * @param tx
   * @param ty
   */
  translate: (tx: number, ty: number) => Animation;

  /**
   * Translate the X axis
   * @param translation
   */
  translateX: (translation: number) => Animation;

  /**
   * Translate the Y axis
   * @param translation
   */
  translateY: (translation: number) => Animation;

  /**
   * Translate the Z axis
   * @param translation
   */
  translateZ: (translation: number) => Animation;

  /**
   * Translate the X, Y and Z axis
   * @param tx
   * @param ty
   * @param tz
   */
  translate3d: (tx: number, ty: number, tz: number) => Animation;


  /* ******************* skew ******************* */

  /**
   * Tilt X and Y axis
   * @param ax
   * @param ay
   */
  skew: (ax: number, ay: number) => Animation;

  /**
   * Tilt X axis
   * @param angle
   */
  skewX: (angle: number) => Animation;

  /**
   * Tilt Y axis
   * @param angle
   */
  skewY: (angle: number) => Animation;


  /* ******************* matrix ******************* */

  /**
   * Matrix transformation
   * @param a
   * @param b
   * @param c
   * @param d
   * @param tx
   * @param ty
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix()
   */
  matrix: (
    a: number, b: number, c: number, d: number,
    tx: number, ty: number
  ) => Animation;

  /**
   * 3D matrix transformation
   * @param a1
   * @param b1
   * @param c1
   * @param d1
   * @param a2
   * @param b2
   * @param c2
   * @param d2
   * @param a3
   * @param b3
   * @param c3
   * @param d3
   * @param a4
   * @param b4
   * @param c4
   * @param d4
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d()
   */
  matrix3d: (
    a1: number, b1: number, c1: number, d1: number,
    a2: number, b2: number, c2: number, d2: number,
    a3: number, b3: number, c3: number, d3: number,
    a4: number, b4: number, c4: number, d4: number
  ) => Animation;
}

interface TransitionStyleOptions {
  opacity?: number;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  transform?: string;
}

export interface TransitionOptions {
  from?: TransitionStyleOptions;
  to?: TransitionStyleOptions;
  options?: AnimationOptions;
}
