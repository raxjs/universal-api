export interface UploadOptions {
  url: string;
  filePath: string;
  fileName: string;
  fileType: 'image' | 'video' | 'audio';
  hideLoading?: boolean;
  header?: object;
  formData?: object;
  success?: (res: UploadResponseData) => void;
  fail?: (res: any) => void;
  complete?: (res: UploadResponseData | any) => void;
}

export interface UploadResponseData {
  data: string;
  statusCode: string | number;
  header?: object;
}
export interface DownloadResponseData {
  tempFilePath: string;
}
export interface DownloadOptions {
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
export interface GetInfoOptions {
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
export interface GetSavedInfoOptions {
  filePath: string;
  success?: (res: GetSavedInfoResponseData) => void;
  fail?: (res: Error) => void;
  complete?: (res: GetSavedInfoResponseData | Error) => void;
}

export interface GetSavedListResponseData {
  fileList: GetSavedListResponseItemData[];
};
export interface GetSavedListResponseItemData {
  size: number;
  createTime: number;
  filePath: string;
}
export interface GetSavedListOptions {
  success?: (res: GetSavedListResponseData) => void;
  fail?: (res: Error) => void;
  complete?: (res: GetSavedListResponseData | Error) => void;
}

export interface SaveResponseData {
  savedFilePath: string;
}
export interface SaveOptions {
  tempFilePath: string;
  success?: (res: SaveResponseData) => void;
  fail?: (res: Error) => void;
  complete?: (res: SaveResponseData | Error) => void;
}

export interface RemoveSavedOptions {
  filePath: string;
  success?: () => void;
  fail?: (res: Error) => void;
  complete?: (res?: Error) => void;
}

export interface OpenDocumentOptions {
  filePath: string;
  fileType: 'pdf';
  success?: () => void;
  fail?: (res: Error) => void;
  complete?: (res?: Error) => void;
}

export interface IFile {
  upload(options: UploadOptions): Promise<null>;
  download(options: DownloadOptions): Promise<null>;
  getInfo(options: GetInfoOptions): Promise<null>;
  getSavedInfo(options: GetSavedInfoOptions): Promise<null>;
  getSavedList(options: GetSavedListOptions): Promise<null>;
  save(options: SaveOptions): Promise<null>;
  removeSaved(options: RemoveSavedOptions): Promise<null>;
  openDocument(options: OpenDocumentOptions): Promise<null>;
}