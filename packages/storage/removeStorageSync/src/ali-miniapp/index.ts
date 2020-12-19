import { isDingdingMiniapp } from 'universal-env';

const removeStorageSync = isDingdingMiniapp ? dd.removeStorageSync : my.removeStorageSync;

export default removeStorageSync;
