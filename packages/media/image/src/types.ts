export interface Callback {
  (): void;
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

export interface ChooseOptions extends CallbackOptions {
  /**
   * Maximum number of optional photos
   */
  count?: number;
  /**
   * Compressed original picture, compressed picture
   */
  sizeType?: string[];
  /**
   * Photo album selection or photo taking
   */
  sourceType?: string[];
}

export interface PreviewOptions extends CallbackOptions {
  /**
   * Currently displays image index
   */
  current?: number;
  /**
   * A list of images to preview
   */
  urls?: string[];
}

export interface GetInfoOptions extends CallbackOptions {
  /**
   * Image path, can be relative path, temporary file path, storage file path, network image path
   */
  src: string;
}

export interface CompressOptions extends CallbackOptions {
  /**
   * An array of image addresses to compress
   */
  filePaths?: string[];
  /**
   * Image path, can be relative path, temporary file path, storage file path, network image path
   */
  src?: string;
  /**
   * Compression level, support 0 ~ 4 integer
   */
  compressLevel?: number;
  /**
   * Compression mass, range 0 ~ 100, the smaller the value, the lower the mass
   */
  quality?: number;
}

export interface SaveOptions extends CallbackOptions {
  /**
   * Image file path
   */
  url: string;
  /**
   * Whether to display picture action menu
   */
  showActionSheet?: boolean;
}

export interface Image {
  /**
   * Take a photo or select an image from a local album.
   * @param options Choose options
   */
  choose(options: ChooseOptions): Promise<any>;
  /**
   * preview image.
   * @param options Preview options
   */
  preview(options: PreviewOptions): Promise<any>;
  /**
   * Get image information.
   * @param options Image information info
   */
  getInfo(options: GetInfoOptions): Promise<any>;
  /**
   * Compress image
   * @param options Compress options
   */
  compress(options: CompressOptions): Promise<any>;
  /**
   * Save Image
   * @param options Image options
   */
  save(options: SaveOptions): Promise<any>;
}
