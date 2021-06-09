import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getStorage = normalize.getStorage((args) => ks.getStorage(args), CONTAINER_NAME.KWAI);

export default getStorage;
