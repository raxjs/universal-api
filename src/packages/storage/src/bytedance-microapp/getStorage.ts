import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getStorage = normalize.getStorage((args) => tt.getStorage(args), CONTAINER_NAME.BYTE);

export default getStorage;
