/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DownloadOptions,
} from '../types';

export default function fun(_: DownloadOptions) {
  return Promise.reject(new Error('@uni：file.downloadFile暂不支持'));
}
