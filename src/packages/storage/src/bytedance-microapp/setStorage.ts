import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setStorage = normalize.setStorage((args) => tt.setStorage(args), CONTAINER_NAME.BYTE);

export default setStorage;
