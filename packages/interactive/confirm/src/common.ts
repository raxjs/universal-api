import { promisify } from '../../../utils/promisify';
import { ConfirmOptions, ConfirmRes } from './types';

/**
 * @param res
 */
const formatResponse = (res): ConfirmRes => {
  return {
    confirm: res.confirm,
    cancel: !res.confirm
  };
};

export function initApi(api) {
  return (args: ConfirmOptions) => {
    return promisify(api)({
      ...args,
      title: args.title || '',
      content: args.content || '',
      confirmText: args.confirmText || '确定',
      cancelText: args.cancelText || '取消',
      success: res => {
        args.success && args.success(formatResponse(res));
      },
      complete: res => {
        args.complete && args.complete(res);
      }
    }).then(formatResponse);
  };
}
