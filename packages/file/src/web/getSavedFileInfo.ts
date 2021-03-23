/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  GetSavedInfoOptions,
} from '../types';

export default function fun(_: GetSavedInfoOptions) {
  return Promise.reject(new Error('@uni：file.getSavedFileInfo暂不支持'));
}
