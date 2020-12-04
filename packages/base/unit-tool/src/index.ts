import { screenWidth } from 'universal-device';

const CALCULATION_ACCURACY = 8;

export const px2rpx = (value: number) => {
  return Number((750 * value / screenWidth).toFixed(CALCULATION_ACCURACY));
};

export const rpx2px = (value: number) => {
  return Number((screenWidth / 750 * value).toFixed(CALCULATION_ACCURACY));
};
