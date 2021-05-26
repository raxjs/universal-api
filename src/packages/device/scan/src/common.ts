import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

export const normalized = (api, containerName) => {
  return (options = {}) => {
    const _options = styleIn(options, containerName);
    const afterOptions = {
      hideAlbum: false,
      scanType: ['barCode', 'qrCode'],
      ..._options,
      ...{
        success: (res) => {
          _options.success && _options.success(res);
        },
        complete: (res) => {
          _options.complete && _options.complete(res);
        },
      } };
    return promisify(api)(afterOptions);
  };
};
