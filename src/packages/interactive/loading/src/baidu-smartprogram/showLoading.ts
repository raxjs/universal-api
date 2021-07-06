import { normalizeShow } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const showLoading = normalizeShow((args) => swan.showLoading(args), CONTAINER_NAME.BAIDU);

export default showLoading;
