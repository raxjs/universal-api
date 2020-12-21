import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const getImageInfo = isDingdingMiniapp ? dd.getImageInfo : my.getImageInfo;

export default initApi(getImageInfo);
