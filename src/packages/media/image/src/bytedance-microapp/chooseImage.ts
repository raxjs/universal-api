import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseImage = normalize.chooseImage((args) => tt.chooseImage(args), CONTAINER_NAME.BYTE);

export default chooseImage;
