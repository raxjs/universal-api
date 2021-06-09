import { Animation, AnimationOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';
import { normalizeOptions } from '../common';

function createAnimation(options?: AnimationOptions): Animation {
  return my.createAnimation(
    normalizeOptions(options, CONTAINER_NAME.ALIPAY),
  );
}

export default createAnimation;
