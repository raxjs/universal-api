export interface Callback {
  (res?): void;
}

export interface CallbackOptions {
  /**
   * Interface to invoke a successful callback function.
   */
  success?: Callback;
  /**
   * Interface to call a failed callback function.
   */
  fail?: Callback;
  /**
   * Interface callback function at the end of the call (executed on success and failure).
   */
  complete?: Callback;
  [propName: string]: any;
}

export interface ShowModalOptions extends CallbackOptions {
  title?: string;
  content?: string;
  showCancel?: boolean;
  cancelText?: string;
  confirmText?: string;
}

export interface showModalRes {
  confirm: boolean;
  cancel: boolean;
}
