import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const showActionSheet = isDingdingMiniapp ? dd.showActionSheet : my.showActionSheet;

export default initApi(showActionSheet);
