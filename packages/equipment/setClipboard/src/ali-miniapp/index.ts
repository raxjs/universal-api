import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const setClipboard = isDingdingMiniapp ? dd.setClipboard : my.setClipboard;

export default initApi(setClipboard);
