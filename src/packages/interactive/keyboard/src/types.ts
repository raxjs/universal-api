import { Uni } from '../../../../../types/interface';

export interface Callback {
  (): void;
}

export interface HideOptions extends Uni.COptions {
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