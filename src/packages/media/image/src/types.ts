interface CallbackOptions {
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

// chooseImage
enum SOURCE_TYPE {
  album,
  camera
}

export interface ChooseImageOptions extends CallbackOptions {
  count?: number;
  sourceType?: (keyof typeof SOURCE_TYPE)[];
}

interface FileData {
  path: string;
  size: number;
}

export interface ChooseImageRes {
  tempFilePaths: string[];
  tempFiles: FileData[];
}

// compressImage
enum QUALITY {
  NO,
  LOW,
  MEDIUM,
  HIGH
}

export interface CompressImageOptions extends CallbackOptions {
  src: string;
  quality?: QUALITY;
}

export interface CompressImageRes {
  tempFilePath: string;
}

// getImageInfo
export interface GetImageInfoOptions extends CallbackOptions {
  src: string;
}

export interface GetImageInfoRes {
  width: number;
  height: number;
  path: string;
}

// previewImage
export interface PreviewImageOptions extends CallbackOptions {
  urls: string[];
  current?: number;
}

// saveImage
export interface SaveImageOptions extends CallbackOptions {
  url: string;
}
