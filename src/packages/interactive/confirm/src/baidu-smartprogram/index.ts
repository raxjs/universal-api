import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalize((args) => swan.showModal(args), CONTAINER_NAME.BAIDU);
