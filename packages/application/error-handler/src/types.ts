export interface RejectCallbackArgs {
  reason: string | Error | Event;
  promise: Promise<any>;
}
export interface Callback {
  (res: string | Error | Event): void;
}
export interface RejectCallback {
  (res: RejectCallbackArgs): void;
}

export interface ErrorEvent{
  onError(callback: Callback): void;
  offError(callback?: Callback): void;
  onUnhandledRejection(callback: RejectCallback): void;
  offUnhandledRejection(callback?: RejectCallback): void;
}
