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

export type CreateVideoContextFn = (id: string, context?: any) => any;
