export interface Callback {
  (result?: any): void;
}

export interface CallbackOptions {
  /**
   * Interface to invoke a successful callback function.
   */
  success?: Callback;
  /**
   * Interface to call a failed callback function.
   */
  fail?: Callback;
  /**
   * Interface callback function at the end of the call (executed on success and failure).
   */
  complete?: Callback;
  [propName: string]: any;
}

export interface SaveOptions extends CallbackOptions {
  /**
   * The file path
   */
  filePath: string;
}

export interface FileList {
  /**
   * The file path
   */
  fileList: any[];
}

export interface GetSaveInfoOptions extends CallbackOptions {
  /**
   * The file path
   */
  filePath: string;
}

export interface SaveFileInfo {
  size: number;
  createTime: number;
}

export interface GetInfoOptions extends CallbackOptions {
  /**
   * The file path
   */
  filePath: string;
  /**
   * The algorithm to calculate the file summary can be md5, sha1, the default value md5
   */
  digestAlgorithm?: string;
}

export interface FileInfo {
  size: number;
  digest: string;
}

export interface OpenOptions extends CallbackOptions {
  /**
   * The file path
   */
  filePath: string;
  /**
   * The file type
   */
  fileType?: string;
}

export interface RemoveSavedOptions extends CallbackOptions {
  /**
   * The file path
   */
  filePath: string;
}

export interface UploadOption extends CallbackOptions {
  /**
   * Developer server address
   */
  url: string;
  /**
   * The path to upload the file resource
   */
  filePath: string | File;
  /**
   * File name, that is, the corresponding key, the developer in the server side through this key can get the binary content of the file.
   */
  fileName: string;
  /**
   * File type supports image, video, audio (image/video/audio)
   */
  fileType?: string;
  /**
   * The HTTP request Header
   */
  header?: object;
  /**
   * Additional form data in the HTTP request
   */
  formData?: object;
}

export interface DownloadOption extends CallbackOptions {
  /**
   * Download file address
   */
  url: string;
  /**
   * The HTTP request Header
   */
  header?: object;
}

export interface File {
  /**
   * Get file information.
   * @param options File options
   */
  getInfo(options: GetInfoOptions): Promise<any>;
  /**
   * Gets saved file information
   * @param options File options
   */
  getSavedInfo(options: GetSaveInfoOptions): Promise<any>;
  /**
   * Gets all saved file information.
   * @param options File options
   */
  getSavedList(options: CallbackOptions): Promise<any>;
  /**
   * Open a file preview on the new page.
   * @param options File options
   */
  openDocument(options: OpenOptions): Promise<any>;
  /**
   * Delete a saved file.
   * @param options File options
   */
  removeSaved(options: RemoveSavedOptions): Promise<any>;
  /**
   * Save the file locally.
   * @param options File options
   */
  save(options: SaveOptions): Promise<any>;
  /**
   * Upload local resources to the developer server.
   * @param options File options
   */
  upload(options: UploadOption): Promise<any>;
  /**
   * Download file resources locally.
   * @param options
   */
  download(options: DownloadOption): Promise<any>;
}
