import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const setStorage = isDingdingMiniapp ? dd.setStorage : my.setStorage;

export default initApi(setStorage);
