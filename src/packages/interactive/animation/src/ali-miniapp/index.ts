import { Animation, AnimationOptions } from '../types';

export function createAnimation(options?: AnimationOptions): Animation {
  return my.createAnimation(options);
}

export default {
  createAnimation,
};
