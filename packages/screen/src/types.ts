export interface ICallBackOptions {
  success?: (res: any) => {};
  fail?: (err: any) => {};
  complete?: () => {};
}

export interface ISetOptions extends ICallBackOptions {
  value: number;
}

export interface IKeepOnOptions extends ICallBackOptions {
  keepScreenOn: boolean;
}

export interface IEventCallback {
  (): void;
}

export interface IScreen {
  getScreenBrightness(options?: ICallBackOptions): void;
  setScreenBrightness(options?: ISetOptions): void;
  setKeepScreenOn(options?: IKeepOnOptions): void;
  onUserCaptureScreen(callback?: IEventCallback): void;
  offUserCaptureScreen(callback?: IEventCallback): void;
}
