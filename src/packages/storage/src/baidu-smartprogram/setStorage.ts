import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setStorage = normalize.setStorage((args) => swan.setStorage(args), CONTAINER_NAME.BAIDU);

export default setStorage;
