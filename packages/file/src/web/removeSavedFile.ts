/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  RemoveSavedOptions,
} from '../types';

export default function fun(_: RemoveSavedOptions) {
  return Promise.reject(new Error('@uni：file.removeSavedFile暂不支持'));
}
