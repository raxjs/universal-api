/// <reference path='../../../../types/interface.d.ts'/>
export interface UploadOptions extends Uni.COptions {
  url: string;
  filePath: string | File;
  fileName: string;
  fileType?: 'image' | 'video' | 'audio';
  hideLoading?: boolean;
  header?: object;
  formData?: object;
  withCredentials?: boolean;
  timeout?: number;
  success?: (res: UploadResponseData) => void;
  fail?: (res: any) => void;
  complete?: (res: UploadResponseData | any) => void;
}

export interface UploadResponseData {
  data: string;
  statusCode: string | number;
  header?: object;
}

export interface UploadProgressUpdateRes {
  progress: number;
  totalBytesSent: number;
  totalBytesExpectedToSend: number;
}
export type UploadProgressUpdateCallback = (res: UploadProgressUpdateRes) => void;
export type UploadHeadersReceivedCallback = (header: any) => void;
export interface UploadTask {
  abort: () => void;
  onProgressUpdate: (cb: UploadProgressUpdateCallback) => void;
  offProgressUpdate?: (cb: UploadProgressUpdateCallback) => void;
  onHeadersReceived?: (cb: UploadHeadersReceivedCallback) => void;
  offHeadersReceived?: (cb: UploadHeadersReceivedCallback) => void;
}

export interface DownloadResponseData {
  tempFilePath: string;
}
export interface DownloadOptions extends Uni.COptions {
  url: string;
  header?: object;
  success?: (res: DownloadResponseData) => void;
  fail?: (res: Error) => void;
  complete?: (res: DownloadResponseData | Error) => void;
}

export interface GetInfoResponseData {
  size: number;
  digest: string;
}
export interface GetInfoOptions extends Uni.COptions {
  filePath: string;
  digestAlgorithm?: 'md5' | 'sha1';
  success?: (res: GetInfoResponseData) => void;
  fail?: (res: Error) => void;
  complete?: (res: GetInfoResponseData | Error) => void;
}

export interface GetSavedInfoResponseData {
  size: number;
  createTime: number;
}
export interface GetSavedInfoOptions extends Uni.COptions {
  filePath: string;
  success?: (res: GetSavedInfoResponseData) => void;
  fail?: (res: Error) => void;
  complete?: (res: GetSavedInfoResponseData | Error) => void;
}

export interface GetSavedListResponseData {
  fileList: GetSavedListResponseItemData[];
}
export interface GetSavedListResponseItemData {
  size: number;
  createTime: number;
  filePath: string;
}
export interface GetSavedListOptions extends Uni.COptions {
  success?: (res: GetSavedListResponseData) => void;
  fail?: (res: Error) => void;
  complete?: (res: GetSavedListResponseData | Error) => void;
}

export interface SaveResponseData {
  savedFilePath: string;
}
export interface SaveOptions extends Uni.COptions {
  tempFilePath: string;
  success?: (res: SaveResponseData) => void;
  fail?: (res: Error) => void;
  complete?: (res: SaveResponseData | Error) => void;
}

export interface RemoveSavedOptions extends Uni.COptions {
  filePath: string;
  success?: () => void;
  fail?: (res: Error) => void;
  complete?: (res?: Error) => void;
}

export interface OpenDocumentOptions extends Uni.COptions {
  filePath: string;
  fileType?: 'pdf';
  success?: () => void;
  fail?: (res: Error) => void;
  complete?: (res?: Error) => void;
}
interface OnProgressUpdateCbRes {
  progress: number;
  totalBytesWritten?: number;
  totalBytesExpectedToWrite?: number;
}

type onProgressUpdateCb = () => OnProgressUpdateCbRes;

export interface DownloadTask {
  abort: () => void;
  onProgressUpdate?: (cb: onProgressUpdateCb) => void;
  offProgressUpdate?: (cb: onProgressUpdateCb) => void;
  onHeadersReceived?: (cb: Function) => void;
  offHeadersReceived?: (cb: Function) => void;
}

export interface IFile {
  upload: (options: UploadOptions) => Promise<null>;
  download: (options: DownloadOptions) => Promise<null> | DownloadTask;
  getInfo: (options: GetInfoOptions) => Promise<null>;
  getSavedInfo: (options: GetSavedInfoOptions) => Promise<null>;
  getSavedList: (options: GetSavedListOptions) => Promise<null>;
  save: (options: SaveOptions) => Promise<null>;
  removeSaved: (options: RemoveSavedOptions) => Promise<null>;
  openDocument: (options: OpenDocumentOptions) => Promise<null>;
}
