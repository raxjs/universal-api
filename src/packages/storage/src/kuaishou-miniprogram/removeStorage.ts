import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const removeStorage = normalize.removeStorage((args) => ks.removeStorage(args), CONTAINER_NAME.KWAI);

export default removeStorage;
