import { CallbackOptions, DownloadOption, GetInfoOptions, GetSaveInfoOptions, OpenOptions, RemoveSavedOptions, SaveOptions } from '../types';
export { default as upload } from './upload';

// Not support
export function getInfo(_: GetInfoOptions) {
  return Promise.reject('Not support getInfo');
}
export function getSavedInfo(_: GetSaveInfoOptions) {
  return Promise.reject('Not support getSavedInfo');
}
export function getSavedList(_: CallbackOptions) {
  return Promise.reject('Not support getSavedList');
}
export function openDocument(_: OpenOptions) {
  return Promise.reject('Not support openDocument');
}
export function removeSaved(_: RemoveSavedOptions) {
  return Promise.reject('Not support removeSaved');
}
export function save(_: SaveOptions) {
  return Promise.reject('Not support save');
}
export function download(_: DownloadOption) {
  return Promise.reject('Not support download');
}
