import { OPTION_STRUCT } from '../types';
import { initApiGetLocation } from '../common';

export const getLocation = initApiGetLocation((args: OPTION_STRUCT) => {
  const { success = () => {}, fail = () => {}, complete = () => {}} = args;
  if ("geolocation" in navigator) {
    /* 地理位置服务可用 */
    navigator.geolocation.getCurrentPosition(position => {
      success(position.coords);
      complete(position.coords)
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

export default {
  getLocation
};
