import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const removeStorage = normalize.removeStorage((args) => tt.removeStorage(args), CONTAINER_NAME.BYTE);

export default removeStorage;
