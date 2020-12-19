import { isDingdingMiniapp } from 'universal-env';

const getStorageSync = isDingdingMiniapp ? dd.getStorageSync : my.getStorageSync;

export default getStorageSync;
