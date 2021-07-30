import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseMedia = normalize.chooseMedia((args) => (ks.canIUse('chooseMedia') ? ks.chooseMedia(args) : ks.chooseImage(args)), CONTAINER_NAME.KWAI);

export default chooseMedia;
