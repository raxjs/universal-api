export interface ICallBackOptions {
  success?: (res: any) => {};
  fail?: (err: any) => {};
  complete?: () => {};
}
export interface IVibrate {
  vibrateShort(options?: ICallBackOptions): void;
  vibrateLong(options?: ICallBackOptions): void;
}
