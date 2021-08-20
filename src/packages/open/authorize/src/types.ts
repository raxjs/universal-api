import { Uni } from '../../../../../types/interface';

export interface Options extends Uni.COptions {
  scope: 'scope.userInfo' | 'scope.userLocation' | 'scope.record' | 'scope.writePhotosAlbum' | 'scope.camera' | 'scope.userLocationBackground' | 'auth_base' | 'auth_zhima';
  success?: (res?) => any;
  fail?: (res) => any;
  complete?: (res?) => any;
}
