import { Animation, AnimationOptions } from '../types';

export function createAnimation(options?: AnimationOptions): Animation {
  return tt.createAnimation(options);
}

export default {
  createAnimation,
};
