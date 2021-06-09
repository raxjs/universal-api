import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getStorage = normalize.getStorage((args) => swan.getStorage(args), CONTAINER_NAME.BAIDU);

export default getStorage;
