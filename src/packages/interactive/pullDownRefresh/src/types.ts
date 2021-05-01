/// <reference path='../../../../../types/interface.d.ts'/>

export interface Callback {
  (): void;
}

export interface StartOptions extends Uni.COptions {
  /**
   * Interface to invoke a successful callback function.
   */
  success ? : Callback;
  /**
   * Interface to call a failed callback function.
   */
  fail ? : (e: Error) => void;
  /**
   * Interface callback function at the end of the call (executed on success and failure).
   */
  complete ? : Callback;
  [propName: string]: any;
}

export interface StopOptions extends Uni.COptions {
  /**
   * Interface to invoke a successful callback function.
   */
  success ? : Callback;
  /**
   * Interface to call a failed callback function.
   */
  fail ? : (e: Error) => void;
  /**
   * Interface callback function at the end of the call (executed on success and failure).
   */
  complete ? : Callback;
  [propName: string]: any;
}

export interface SwitchOptions extends Uni.COptions {
  /**
   * Interface to switch on .
   */
  pullRefresh ? : boolean;
  [propName: string]: any;
}
