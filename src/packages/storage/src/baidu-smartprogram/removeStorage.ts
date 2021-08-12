import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const removeStorage = normalize.removeStorage((args) => swan.removeStorage(args), CONTAINER_NAME.BAIDU);

export default removeStorage;
