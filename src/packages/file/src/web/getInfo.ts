/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  GetInfoOptions,
} from '../types';

export default function fun(_: GetInfoOptions) {
  return Promise.reject(new Error('@uni：file.getFileInfo暂不支持'));
}
