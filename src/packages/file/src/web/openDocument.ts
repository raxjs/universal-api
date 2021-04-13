/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  OpenDocumentOptions,
} from '../types';

export default function fun(_: OpenDocumentOptions) {
  return Promise.reject(new Error('@uni：file.openDocument暂不支持'));
}
