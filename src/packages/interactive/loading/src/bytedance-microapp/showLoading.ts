import { normalizeShow } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export const showLoading = normalizeShow((args) => tt.showLoading(args), CONTAINER_NAME.BYTE);

export default showLoading;
