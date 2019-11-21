export interface Callback {
  (result: any): void;
}

export interface ConnectOptions{
  url: string;
  header?: object;
  /**
   * 阿里小程序支持
   */
  data?: object;
  /**
   * 接口调用成功的回调函数
   */
  success?: Callback;
  /**
   * 接口调用失败的回调函数
   */
  fail?: Callback;
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: Callback;
  [propName: string]: any;
}

interface OnOpenResult {
  header?: object;
}

export interface OpenCallback{
  (result: OnOpenResult): void;
}

export interface MessageOptions{
  data: string | ArrayBuffer;
  isBuffer?: boolean;
  /**
   * 接口调用成功的回调函数
   */
  success?: Callback;
  /**
   * 接口调用失败的回调函数
   */
  fail?: Callback;
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: Callback;
  [propName: string]: any;
}

interface OnMessageResult {
  data: string | ArrayBuffer;
}

export interface MessageCallback{
  (result: OnMessageResult): void;
}

export interface CloseOptions{
  code?: number;
  reason?: string;
  /**
   * 接口调用成功的回调函数
   */
  success?: Callback;
  /**
   * 接口调用失败的回调函数
   */
  fail?: Callback;
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: Callback;
  [propName: string]: any;
}

export interface WebSocket {
  connect(options: ConnectOptions): Promise<any>;
  onOpen(callback: OpenCallback): void;
  onError(callback: Callback): void;
  sendMessage(options: MessageOptions): Promise<any>;
  onMessage(callback: MessageCallback): void;
  close(options: CloseOptions): Promise<any>;
  onClose(callback: Callback): void;
}
