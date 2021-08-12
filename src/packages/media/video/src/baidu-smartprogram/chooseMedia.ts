import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseMedia = normalize.chooseMedia((args) => (swan.canIUse('chooseMedia') ? swan.chooseMedia(args) : swan.chooseImage(args)), CONTAINER_NAME.BAIDU);

export default chooseMedia;
