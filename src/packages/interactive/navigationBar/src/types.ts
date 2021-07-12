/// <reference path='../../../../../types/interface.d.ts'/>

export interface Callback {
  (): void;
}

export interface SetNavigationBarTitleOptions extends Uni.COptions {
  /**
   * Interface to set navigation bar title;
   */
  title: string;
  /**
   * Interface to invoke a successful callback function.
   */
  success?: Callback;
  /**
   * Interface to call a failed callback function.
   */
  fail?: (e: Error) => void;
  /**
   * Interface callback function at the end of the call (executed on success and failure).
   */
  complete?: Callback;
  [propName: string]: any;
}

export interface SetNavigationBarColorOptions extends Uni.COptions {
  /**
   * Interface to set navigation bar frontColor;
   */
  frontColor?: string;
  /**
   * Interface to set navigation bar backgroundColor;
   */
  backgroundColor: string;
  /**
   * Interface to whether to reset the navigation bar to the default color;
   */
  reset?: Boolean;
  /**
   * Interface to invoke a successful callback function.
   */
  success?: Callback;
  /**
   * Interface to call a failed callback function.
   */
  fail?: (e: Error) => void;
  /**
   * Interface callback function at the end of the call (executed on success and failure).
   */
  complete?: Callback;
  [propName: string]: any;
}
