import { Animation, AnimationOptions } from '../types';

export function createAnimation(options?: AnimationOptions): Animation {
  return wx.createAnimation(options);
}

export default {
  createAnimation,
};
