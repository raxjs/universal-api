/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SaveOptions,
} from '../types';

export default function fun(_: SaveOptions) {
  return Promise.reject(new Error('@uni：file.saveFile暂不支持'));
}
