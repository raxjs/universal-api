import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const chooseImage = (args) => isDingdingMiniapp ? dd.chooseImage(args) : my.chooseImage(args);

export default initApi(chooseImage);
