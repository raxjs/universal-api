import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseVideo = normalize.chooseVideo((args) => tt.chooseVideo(args), CONTAINER_NAME.BYTE);

export default chooseVideo;
