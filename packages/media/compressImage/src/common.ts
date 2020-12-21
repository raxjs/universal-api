import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import { promisify } from '../../../utils/promisify';
import { OPTION_STRUCT, RESPONSE_STRUCT } from './types';

const formatResponse = (res): RESPONSE_STRUCT => {
  const result: RESPONSE_STRUCT = {
    tempFilePath: res.tempFilePath || res.filePaths[0] || res.apFilePaths[0]
  };
  return result;
}

function styleOptions(options: OPTION_STRUCT) {
  const args: any = {
    success: res => {
      options.success && options.success(formatResponse(res));
    },
    complete: res => {
      options.complete && options.complete(formatResponse(res));
    }
  };
  // 图片地址映射，只支持单张图片压缩
  if (isWeChatMiniProgram || isByteDanceMicroApp) {
    args.src = options.src;
  } else if (isDingdingMiniapp) {
    args.filePaths = [options.src];
  } else if (isMiniApp) {
    args.apFilePaths = [options.src];
  }
  // 压缩质量映射
  const quality = options.quality || 2;
  if (isWeChatMiniProgram || isByteDanceMicroApp) {
    args.quality = quality * 33;
  } else if (isDingdingMiniapp) {
    args.compressLevel = quality;
  } else if (isMiniApp) {
    args.compressLevel = quality;
  }
  return args;
}

export function initApi(api) {
  return (args: OPTION_STRUCT) => {
    return promisify(api)(styleOptions(args)).then(formatResponse);
  };
}