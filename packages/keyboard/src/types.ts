// docs should notice wechat needs firstName

export interface ICallBackOptions {
  success?: (res: any) => {};
  fail?: (err: any) => {};
  complete?: () => {};
}

export interface IKeyboard {
  hideKeyboard(options: ICallBackOptions): void
}
