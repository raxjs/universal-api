export interface Callback {
  (): void;
}

export interface Options{
  /**
   * The menu title.
   */
  title?: string;
  /**
   * Menu button text array.
   */
  items: string[];
  /**
   * Cancel button copy.
   */
  cancelButtonText?: string;
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

export interface ActionSheet {
  /**
   * Display action sheet.
   * @param options Parameters
   */
  show(options: Options): Promise<any> | boolean;
}
