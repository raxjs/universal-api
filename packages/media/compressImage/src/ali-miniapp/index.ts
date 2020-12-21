import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const compressImage = isDingdingMiniapp ? dd.compressImage : my.compressImage;

export default initApi(compressImage);
