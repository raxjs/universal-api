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

export interface ConfirmOptions extends CallbackOptions {
  title?: string;
  content?: string;
  cancelText?: string;
  confirmText?: string;
}

export interface ConfirmRes {
  confirm: boolean;
  cancel: boolean;
}
