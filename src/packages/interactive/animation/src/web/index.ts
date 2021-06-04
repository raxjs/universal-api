import { Animation, AnimationOptions } from '../types';

export function createAnimation(options?: AnimationOptions): Animation {
  // TODO
  return wx.createAnimation(options);
}

export default {
  createAnimation,
};
