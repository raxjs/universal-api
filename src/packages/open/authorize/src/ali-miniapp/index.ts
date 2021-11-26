import {
  Options,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function authorize(options: Options) {
  const { scope, success, fail, complete } = options;
  const authTypeMap = {
    'scope.record': 'MICROPHONE',
    'scope.camera': 'CAMERA',
    'scope.writePhotosAlbum': 'PHOTO',
  };
  const scopeMap = {
    'scope.userInfo': 'auth_user',
    auth_base: 'auth_base',
    auth_zhima: 'auth_zhima',
  };
  if (authTypeMap[scope]) {
    return my.showAuthGuide({
      authType: authTypeMap[scope],
      success(res?) {
        success && success(res);
      },
      fail(res) {
        fail && fail(res);
      },
      complete(res) {
        complete && complete(res);
      },
    });
  }
  return my.getAuthCode({
    scopes: scopeMap[scope] ? scopeMap[scope] : 'auth_user',
    success(res?) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
}
export default normalize(authorize, CONTAINER_NAME.ALIPAY);
