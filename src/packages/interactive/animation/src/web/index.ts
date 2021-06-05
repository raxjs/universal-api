import { Animation, AnimationOptions } from '../types';
import AnimationImpl from './AnimationImpl';
import { applyAnimation } from '../common';

function createAnimation(options?: AnimationOptions): Animation {
  return new AnimationImpl(options);
}

export {
  createAnimation,
  applyAnimation,
};

export default {
  createAnimation,
  applyAnimation,
};
