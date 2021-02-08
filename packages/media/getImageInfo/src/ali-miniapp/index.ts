import { isDingdingMiniapp } from '@uni/env';
import { initApi } from '../common';

const getImageInfo = (args) => isDingdingMiniapp ? dd.getImageInfo(args) : my.getImageInfo(args);

export default initApi(getImageInfo);
