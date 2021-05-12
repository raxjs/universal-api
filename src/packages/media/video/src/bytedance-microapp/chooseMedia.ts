import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseMedia = normalize.chooseMedia((args) => tt.chooseImage(args), CONTAINER_NAME.BYTE);

export default chooseMedia;
