import { isDingdingMiniapp } from '@uni/env';
import { initApi } from '../common';

const chooseImage = (args) => isDingdingMiniapp ? dd.chooseImage(args) : my.chooseImage(args);

export default initApi(chooseImage);
