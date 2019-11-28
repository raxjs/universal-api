export interface Callback {
  (): void;
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

export interface getTypeOptions extends CallbackOptions {
}

export interface Network {
  getType(options: getTypeOptions): Promise<any>;
  onStatusChange(callback: Callback): void;
  offStatusChange(callback: Callback): void;
}
