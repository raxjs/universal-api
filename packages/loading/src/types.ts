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
  content: string;
  /**
   * Whether to display transparent mask to prevent touch penetration.
   */
  mask?: string;
  /**
   * Delay display, unit ms
   */
  delay?: number;
}

export interface HideOptions extends CallbackOptions {
  /**
   * Specific refers to the current page instance.
   */
  page?: Record<string, any>;
}

export interface Loading {
  show(options: ShowOptions): Promise<any>;
  hide(options?: HideOptions): Promise<any>;
}
