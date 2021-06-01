/// <reference path='../../../../../types/interface.d.ts'/>

// chooseVideo
enum SOURCE_TYPE {
  album,
  camera
}

enum CAMERA_TYPE {
  back,
  front
}

export interface ChooseVideoOptions extends Uni.COptions {
  sourceType?: Array<keyof typeof SOURCE_TYPE>;
  compressed?: boolean;
  maxDuration?: number;
  camera?: keyof typeof CAMERA_TYPE;
  success?: (res: ChooseVideoRes) => any;
  fail?: (e: Error) => any;
  complete?: (res: ChooseVideoRes | Error) => any;
}

export interface ChooseVideoRes {
  tempFilePath: string;
  duration: number;
  size: number;
  height: number;
  width: number;
}

enum MEDIA_TYPE {
  image,
  video,
}

enum SIZE_TYPE {
  original,
  compressed,
}
export interface ChooseMediaOptions extends Uni.COptions {
  count?: number;
  sourceType?: Array<keyof typeof SOURCE_TYPE>;
  mediaType?: Array<keyof typeof MEDIA_TYPE>;
  maxDuration?: number;
  sizeType?: Array<keyof typeof SIZE_TYPE>;
  camera?: keyof typeof CAMERA_TYPE;
  success?: (res: ChooseMediaRes) => any;
  fail?: (e: Error) => any;
  complete?: (res: ChooseMediaRes | Error) => any;
}

interface TempFileType {
  tempFilePath: string;
  size: number;
  duration?: number;
  height?: number;
  width?: number;
  thumbTempFilePath?: string;
}
export interface ChooseMediaRes {
  tempFiles: Array<TempFileType>;
  type?: keyof typeof MEDIA_TYPE;
  files?: any;
}

export type CreateVideoContextFn = (id: string, context?: any) => any;
