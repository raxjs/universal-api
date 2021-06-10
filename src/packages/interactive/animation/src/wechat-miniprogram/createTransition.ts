import { Animation, TransitionOptions } from '../types';
import createAnimation from './createAnimation';
import { normalizeCreateTransition } from '../common';

function createTransition(options: TransitionOptions): Animation {
  const animation = createAnimation();
  return normalizeCreateTransition(animation, options);
}

export default createTransition;
