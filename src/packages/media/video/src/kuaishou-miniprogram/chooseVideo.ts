import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseVideo = normalize.chooseVideo((args) => ks.chooseVideo(args), CONTAINER_NAME.KWAI);


export default chooseVideo;
