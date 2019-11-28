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

export interface showOptions extends CallbackOptions {
  /**
   * Content of the prompt.
   */
  content: String;
  /**
   * Whether to display transparent mask to prevent touch penetration.
   */
  mask?: String;
  /**
   * Delay display, unit ms
   */
  delay?: Number;
}

export interface hideOptions extends CallbackOptions {
  /**
   * Specific refers to the current page instance.
   */
  page?: Object;
}

export interface Loading {
  show(options: showOptions): Promise<any>;
  hide(options?: hideOptions): Promise<any>;
}
