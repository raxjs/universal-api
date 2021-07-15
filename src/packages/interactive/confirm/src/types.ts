import { Uni } from '../../../../../types/interface';

export interface Callback {
  (res?): void;
}
export interface ConfirmRes {
  confirm?: boolean;
  cancel?: boolean;
}
export interface ConfirmOptions extends Uni.COptions {
  title?: string;
  content?: string;
  cancelText?: string;
  confirmText?: string;
  /**
   * Interface to invoke a successful callback function.
   */
  success?: (res?: ConfirmRes) => void;
  /**
    * Interface to call a failed callback function.
    */
  fail?: (e?: Error) => void;
  /**
    * Interface callback function at the end of the call (executed on success and failure).
    */
  complete?: (res?: ConfirmRes | Error) => void;
  [propName: string]: any;
}

