/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DownloadOptions,
  GetInfoOptions,
  GetSavedInfoOptions,
  GetSavedListOptions,
  SaveOptions,
  RemoveSavedOptions,
  OpenDocumentOptions, } from '../types';
import {initApi} from '../common';
import uploadModule from './upload';

export const upload = initApi.upload(uploadModule);

// Not support
export function getInfo(_: GetInfoOptions) {
  return Promise.reject('Not support getInfo');
}
export function getSavedInfo(_: GetSavedInfoOptions) {
  return Promise.reject('Not support getSavedInfo');
}
export function getSavedList(_: GetSavedListOptions) {
  return Promise.reject('Not support getSavedList');
}
export function openDocument(_: OpenDocumentOptions) {
  return Promise.reject('Not support openDocument');
}
export function removeSaved(_: RemoveSavedOptions) {
  return Promise.reject('Not support removeSaved');
}
export function save(_: SaveOptions) {
  return Promise.reject('Not support save');
}
export function download(_: DownloadOptions) {
  return Promise.reject('Not support download');
}
export default {
  getInfo,
  getSavedInfo,
  getSavedList,
  openDocument,
  removeSaved,
  save,
  download,
  upload
};