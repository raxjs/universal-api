import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setStorage = normalize.setStorage((args) => ks.setStorage(args), CONTAINER_NAME.KWAI);

export default setStorage;
