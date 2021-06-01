import { normalizeChooseLocation } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const chooseLocation = normalizeChooseLocation(() => {
  throw new Error('@uni/apis: chooseLocation不支持');
}, CONTAINER_NAME.WEB);

export default chooseLocation;
