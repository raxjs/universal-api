/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DownloadOptions,
  GetInfoOptions,
  GetSavedInfoOptions,
  GetSavedListOptions,
  SaveOptions,
  RemoveSavedOptions,
  OpenDocumentOptions } from '../types';
import { initApi } from '../common';
import uploadModule from './upload';

export const upload = initApi.upload(uploadModule);

// Not support
export function getInfo(_: GetInfoOptions) {
  return Promise.reject(new Error('@uni：file.getInfo暂不支持'));
}
export function getSavedInfo(_: GetSavedInfoOptions) {
  return Promise.reject(new Error('@uni：file.getSavedInfo暂不支持'));
}
export function getSavedList(_: GetSavedListOptions) {
  return Promise.reject(new Error('@uni：file.getSavedList 暂不支持'));
}
export function openDocument(_: OpenDocumentOptions) {
  return Promise.reject(new Error('@uni：file.openDocument 暂不支持'));
}
export function removeSaved(_: RemoveSavedOptions) {
  return Promise.reject(new Error('@uni：file.removeSaved 暂不支持'));
}
export function save(_: SaveOptions) {
  return Promise.reject(new Error('@uni：file.save 暂不支持'));
}
export function download(_: DownloadOptions) {
  return Promise.reject(new Error('@uni：file.download 暂不支持'));
}
export default {
  getInfo,
  getSavedInfo,
  getSavedList,
  openDocument,
  removeSaved,
  save,
  download,
  upload,
};
