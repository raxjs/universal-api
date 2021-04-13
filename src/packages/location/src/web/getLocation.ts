import { OptionStruct } from '../types';
import { normalizeGetLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getLocation = normalizeGetLocation((args: OptionStruct) => {
  const { success = () => {}, fail = () => {}, complete = () => {} } = args;
  if ('geolocation' in navigator) {
    /* 地理位置服务可用 */
    navigator.geolocation.getCurrentPosition((position) => {
      success(position.coords as any);
      complete(position.coords);
    }, (err) => {
      fail(err);
      complete(err);
    });
  } else {
    /* 地理位置服务不可用 */
    const err = { code: -1, message: '地理位置服务不可用' };
    fail(err);
    complete(err);
  }
}, CONTAINER_NAME.WEB);

export default getLocation;
