import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export default normalize((args) => tt.showModal(args), CONTAINER_NAME.BYTE);
