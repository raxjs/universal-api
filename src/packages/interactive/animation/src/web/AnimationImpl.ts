import { Animation, AnimationAction, AnimationActionAnimate, AnimationData, AnimationOptions } from '../types';
import { getDefaultOptions, normalizeUnit } from './util';
import applyWebAnimation from './apply';

export default class AnimationImpl implements Animation {
  private options: AnimationOptions;
  private actions: AnimationAction[];
  private currentTransform: Record<string, AnimationActionAnimate>;
  private currentStepAnimates: AnimationActionAnimate[];

  constructor(options?: AnimationOptions) {
    this.options = getDefaultOptions(options);
    this.actions = [];
    this.currentTransform = {};
    this.currentStepAnimates = [];
  }

  export(dom?: HTMLElement): AnimationData {
    const actions = this.actions.slice();
    applyWebAnimation(actions, dom);

    this.actions = [];
    return {
      actions,
    };
  }

  step(options?: AnimationOptions): Animation {
    options = options ? getDefaultOptions(options) : this.options;

    this.currentStepAnimates.forEach((animate) => {
      let key = animate.type;
      if (key === 'style') {
        key += `.${animate.args[0]}`;
      }
      this.currentTransform[key] = animate;
    });

    const animates = [];
    Object.keys(this.currentTransform).forEach((key) => {
      animates.push(this.currentTransform[key]);
    });

    this.actions.push({
      animates,
      option: {
        transformOrigin: options.transformOrigin,
        transition: {
          delay: options.delay,
          duration: options.duration,
          timingFunction: options.timingFunction,
        },
      },
    });
    this.currentStepAnimates = [];

    return this;
  }

  opacity(value: number): Animation {
    this.currentStepAnimates.push({
      type: 'style',
      args: ['opacity', value],
    });
    return this;
  }

  backgroundColor(value: string): Animation {
    this.currentStepAnimates.push({
      type: 'style',
      args: ['background-color', value],
    });
    return this;
  }

  width(value: number | string): Animation {
    this.currentStepAnimates.push({
      type: 'style',
      args: ['width', normalizeUnit(value, 'px')],
    });
    return this;
  }

  height(value: number | string): Animation {
    this.currentStepAnimates.push({
      type: 'style',
      args: ['height', normalizeUnit(value, 'px')],
    });
    return this;
  }

  left(value: number | string): Animation {
    this.currentStepAnimates.push({
      type: 'style',
      args: ['left', normalizeUnit(value, 'px')],
    });
    return this;
  }

  right(value: number | string): Animation {
    this.currentStepAnimates.push({
      type: 'style',
      args: ['right', normalizeUnit(value, 'px')],
    });
    return this;
  }

  top(value: number | string): Animation {
    this.currentStepAnimates.push({
      type: 'style',
      args: ['top', normalizeUnit(value, 'px')],
    });
    return this;
  }

  bottom(value: number | string): Animation {
    this.currentStepAnimates.push({
      type: 'style',
      args: ['bottom', normalizeUnit(value, 'px')],
    });
    return this;
  }

  rotate(angle = 0): Animation {
    this.currentStepAnimates.push({
      type: 'rotate',
      args: [normalizeUnit(angle, 'deg')],
    });
    return this;
  }

  rotate3d(x = 0, y = 0, z = 0, angle = 0): Animation {
    this.currentStepAnimates.push({
      type: 'rotate3d',
      args: [x, y, z, normalizeUnit(angle, 'deg')],
    });
    return this;
  }

  rotateX(angle = 0): Animation {
    this.currentStepAnimates.push({
      type: 'rotateX',
      args: [normalizeUnit(angle, 'deg')],
    });
    return this;
  }

  rotateY(angle = 0): Animation {
    this.currentStepAnimates.push({
      type: 'rotateY',
      args: [normalizeUnit(angle, 'deg')],
    });
    return this;
  }

  rotateZ(angle = 0): Animation {
    this.currentStepAnimates.push({
      type: 'rotateZ',
      args: [normalizeUnit(angle, 'deg')],
    });
    return this;
  }

  scale(sx: number, sy: number): Animation {
    if (sx === undefined) sx = 1;
    if (sy === undefined) sy = sx;

    this.currentStepAnimates.push({
      type: 'scale',
      args: [sx, sy],
    });
    return this;
  }

  scale3d(sx = 1, sy = 1, sz = 1): Animation {
    this.currentStepAnimates.push({
      type: 'scale3d',
      args: [sx, sy, sz],
    });
    return this;
  }

  scaleX(scale = 1): Animation {
    this.currentStepAnimates.push({
      type: 'scaleX',
      args: [scale],
    });
    return this;
  }

  scaleY(scale = 1): Animation {
    this.currentStepAnimates.push({
      type: 'scaleY',
      args: [scale],
    });
    return this;
  }

  scaleZ(scale = 1): Animation {
    this.currentStepAnimates.push({
      type: 'scaleZ',
      args: [scale],
    });
    return this;
  }

  translate(tx = 0, ty = 0): Animation {
    this.currentStepAnimates.push({
      type: 'translate',
      args: [normalizeUnit(tx, 'px'), normalizeUnit(ty, 'px')],
    });
    return this;
  }

  translate3d(tx = 0, ty = 0, tz = 0): Animation {
    this.currentStepAnimates.push({
      type: 'translate3d',
      args: [
        normalizeUnit(tx, 'px'),
        normalizeUnit(ty, 'px'),
        normalizeUnit(tz, 'px'),
      ],
    });
    return this;
  }

  translateX(translation = 0): Animation {
    this.currentStepAnimates.push({
      type: 'translateX',
      args: [normalizeUnit(translation, 'px')],
    });
    return this;
  }

  translateY(translation = 0): Animation {
    this.currentStepAnimates.push({
      type: 'translateY',
      args: [normalizeUnit(translation, 'px')],
    });
    return this;
  }

  translateZ(translation = 0): Animation {
    this.currentStepAnimates.push({
      type: 'translateZ',
      args: [normalizeUnit(translation, 'px')],
    });
    return this;
  }

  skew(ax = 0, ay = 0): Animation {
    this.currentStepAnimates.push({
      type: 'skew',
      args: [normalizeUnit(ax, 'deg'), normalizeUnit(ay, 'deg')],
    });
    return this;
  }

  skewX(angle = 0): Animation {
    this.currentStepAnimates.push({
      type: 'skewX',
      args: [normalizeUnit(angle, 'deg')],
    });
    return this;
  }

  skewY(angle = 0): Animation {
    this.currentStepAnimates.push({
      type: 'skewY',
      args: [normalizeUnit(angle, 'deg')],
    });
    return this;
  }

  matrix(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0): Animation {
    this.currentStepAnimates.push({
      type: 'matrix',
      args: [a, b, c, d, tx, ty],
    });
    return this;
  }

  matrix3d(
    a1 = 1, b1 = 0, c1 = 0, d1 = 0,
    a2 = 0, b2 = 1, c2 = 0, d2 = 0,
    a3 = 0, b3 = 0, c3 = 1, d3 = 0,
    a4 = 0, b4 = 0, c4 = 0, d4 = 1,
  ): Animation {
    this.currentStepAnimates.push({
      type: 'matrix3d',
      args: [
        a1, b1, c1, d1,
        a2, b2, c2, d2,
        a3, b3, c3, d3,
        a4, b4, c4, d4,
      ],
    });
    return this;
  }
}
