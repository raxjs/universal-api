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

export interface ShowActionSheetOptions extends CallbackOptions {
  itemList: Array<string>;
}

export interface ShowActionSheetRes {
  tapIndex: number;
}
