import { Uni } from '../../../../../types/interface';

export interface Callback {
  (): void;
}

export interface StartOptions extends Uni.COptions {
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

export interface StopOptions extends Uni.COptions {
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

export interface SwitchOptions extends Uni.COptions {
  /**
   * Interface to switch on .
   */
  pullRefresh?: boolean;
  /**
   * Interface to set a distance to trigger event.
   */
  triggerDistance?: number;
  /**
   * Interface to set a Callback function when the event is triggered.
   */
  eventCallback?: Callback;
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
