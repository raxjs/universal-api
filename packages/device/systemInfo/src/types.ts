export interface SYSTEM_INFO {
  pixelRatio: number;
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  language: string;
  version: string;
  platform: string;
}

export interface AsyncOptions {
  success?: (res: SYSTEM_INFO) => void;
  fail?: (res: any) => void;
  complete?: (res: SYSTEM_INFO | any) => void;
}
