import { Animation, AnimationOptions } from '../types';
import AnimationImpl from './AnimationImpl';

export function createAnimation(options?: AnimationOptions): Animation {
  return new AnimationImpl(options);
}

export default {
  createAnimation,
};
