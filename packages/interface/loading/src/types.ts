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

export interface ShowOptions extends CallbackOptions {
  /**
   * Content of the prompt.
   */
  content?: string;
}

export interface HideOptions extends CallbackOptions {
}

export interface Loading {
  showLoading(options: ShowOptions): Promise<any>;
  hideLoading(options?: HideOptions): Promise<any>;
}
