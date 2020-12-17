import {isMiniappPlatform, isWeb } from 'universal-env';
import callPlatformAPI from '../../../utils/callPlatformAPI';
import {parseQuery} from '../../../utils';

export default () => {
  if (isMiniappPlatform) {
    return callPlatformAPI('getLaunchOptionsSync');
  } else if (isWeb) {
    return parseQuery();
  } else {
    throw new Error('evapi：getLaunchOptionsSync暂不支持');
  }
};
