import { Animation, AnimationOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';
import { getMergedOptions } from '../common';

function createAnimation(options?: AnimationOptions): Animation {
  const animation = swan.createAnimation(
    getMergedOptions(CONTAINER_NAME.BAIDU, options),
  );

  // override
  const _step = animation.step.bind(animation);
  const _export = animation.export.bind(animation);
  animation.step = (opts) => {
    opts = getMergedOptions(CONTAINER_NAME.BAIDU, {
      ...options,
      ...opts,
    });
    return _step(opts);
  };
  animation.export = () => {
    return _export();
  };

  return animation;
}

export default createAnimation;
