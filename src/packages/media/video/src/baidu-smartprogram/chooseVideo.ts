import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseVideo = normalize.chooseVideo((args) => swan.chooseVideo(args), CONTAINER_NAME.BAIDU);


export default chooseVideo;
