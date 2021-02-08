import { isDingdingMiniapp } from '@uni/env';
import { initApi } from '../common';

const showActionSheet = (args) => isDingdingMiniapp ? dd.showActionSheet(args) : my.showActionSheet(args);

export default initApi(showActionSheet);
