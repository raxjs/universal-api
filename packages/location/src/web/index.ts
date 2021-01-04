import { OptionStruct } from '../types';
import { initApiGetLocation, initApiOpenLocation } from '../common';

export const getLocation = initApiGetLocation((args: OptionStruct) => {
  const { success = () => {}, fail = () => {}, complete = () => {}} = args;
  if ('geolocation' in navigator) {
    /* 地理位置服务可用 */
    navigator.geolocation.getCurrentPosition(position => {
      success(position.coords);
      complete(position.coords);
    }, err => {
      fail(err);
      complete(err);
    });
  } else {
    /* 地理位置服务不可用 */
    const err = {code: -1, message: '地理位置服务不可用'};
    fail(err);
    complete(err);
  }
});
const openLocation = initApiOpenLocation(() => {
  throw new Error('universal-api: openLocation不支持');
});
export default {
  getLocation,
  openLocation
};
