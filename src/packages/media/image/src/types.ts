/// <reference path='../../../../../types/interface.d.ts'/>


// chooseImage
enum SOURCE_TYPE {
  album,
  camera
}

export interface ChooseImageOptions extends Uni.COptions {
  count?: number;
  sourceType?: Array<keyof typeof SOURCE_TYPE>;
  success?: (res: ChooseImageRes) => any;
  fail?: (e: Error) => any;
  complete?: (res: ChooseImageRes | Error) => any;
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

export interface CompressImageOptions extends Uni.COptions {
  src: string;
  quality?: QUALITY;
  success?: (res: CompressImageRes) => any;
  fail?: (e: Error) => any;
  complete?: (res: CompressImageRes | Error) => any;
}

export interface CompressImageRes {
  tempFilePath: string;
}

// getImageInfo
export interface GetImageInfoOptions extends Uni.COptions {
  src: string;
  success?: (res: GetImageInfoRes) => any;
  fail?: (e: Error) => any;
  complete?: (res: GetImageInfoRes | Error) => any;
}

export interface GetImageInfoRes {
  width: number;
  height: number;
  path: string;
}

// previewImage
export interface PreviewImageOptions extends Uni.COptions {
  urls: string[];
  current?: number;
  success?: () => any;
  fail?: (e: Error) => any;
  complete?: () => any;
}

// saveImage
export interface SaveImageOptions extends Uni.COptions {
  url: string;
  success?: () => any;
  fail?: (e: Error) => any;
  complete?: () => any;
}
