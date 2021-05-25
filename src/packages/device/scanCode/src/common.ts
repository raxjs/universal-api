import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

export const normalized = (api, containerName) => {
  return (options) => {
    const _options = styleIn(options, containerName);
    const afterOptions = {
      ..._options,
      scanType: ['barCode', 'qrCode'],
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
