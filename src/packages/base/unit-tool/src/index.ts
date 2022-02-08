import { getInfoSync } from '@uni/system-info';

const { windowWidth } = getInfoSync();
const CALCULATION_ACCURACY = 8;

export const px2rpx = (value: number) => {
  return Number((750 * value / windowWidth).toFixed(CALCULATION_ACCURACY));
};

export const rpx2px = (value: number) => {
  return Number((windowWidth / 750 * value).toFixed(CALCULATION_ACCURACY));
};
export default {
  px2rpx,
  rpx2px,
};
