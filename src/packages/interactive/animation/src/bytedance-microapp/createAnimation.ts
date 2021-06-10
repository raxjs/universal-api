import { Animation, AnimationOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';
import { getDefaultOptions } from '../common';

function createAnimation(options?: AnimationOptions): Animation {
  const animation = tt.createAnimation(
    getDefaultOptions(CONTAINER_NAME.BYTE, options),
  );

  // override
  const _step = animation.step.bind(animation);
  const _export = animation.export.bind(animation);
  animation.step = (opts) => {
    opts = getDefaultOptions(CONTAINER_NAME.BYTE, options);
    return _step(opts);
  };
  animation.export = () => {
    return _export();
  };

  return animation;
}

export default createAnimation;
