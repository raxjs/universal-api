import { isDingdingMiniapp } from 'universal-env';

const setStorageSync = isDingdingMiniapp ? dd.setStorageSync : my.setStorageSync;

export default setStorageSync;
