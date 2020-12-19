import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const getStorage = isDingdingMiniapp ? dd.getStorage : my.getStorage;

export default initApi(getStorage);
