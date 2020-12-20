import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const getClipboard = isDingdingMiniapp ? dd.getClipboard : my.getClipboard;

export default initApi(getClipboard);
