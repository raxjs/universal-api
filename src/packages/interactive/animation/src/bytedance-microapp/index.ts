import { Animation, AnimationOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeOptions } from '../common';

function createAnimation(options?: AnimationOptions): Animation {
  return tt.createAnimation(
    normalizeOptions(options, CONTAINER_NAME.BYTE),
  );
}

export default createAnimation;
