// chooseImage
enum SOURCE_TYPE {
  album,
  camera
}

export interface ChooseImageOptions {
  count?: number;
  sourceType?: (keyof typeof SOURCE_TYPE)[];
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
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

export interface CompressImageOptions {
  src: string;
  quality?: QUALITY;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface CompressImageRes {
  tempFilePath: string;
}

// getImageInfo
export interface GetImageInfoOptions {
  src: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface GetImageInfoRes {
  width: number;
  height: number;
  path: string;
}
