/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  GetSavedListOptions,
} from '../types';

export default function fun(_: GetSavedListOptions) {
  return Promise.reject(new Error('@uni：file.getSavedFileList暂不支持'));
}
