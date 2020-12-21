import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const chooseImage = isDingdingMiniapp ? dd.chooseImage : my.chooseImage;

export default initApi(chooseImage);
