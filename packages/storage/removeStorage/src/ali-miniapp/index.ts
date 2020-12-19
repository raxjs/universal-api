import { isDingdingMiniapp } from 'universal-env';
import { initApi } from '../common';

const removeStorage = isDingdingMiniapp ? dd.removeStorage : my.removeStorage;

export default initApi(removeStorage);
