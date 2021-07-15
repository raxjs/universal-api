import { Uni } from '../../../../../types/interface';

export interface ShowActionSheetRes {
  tapIndex: number;
}
export interface ShowActionSheetOptions extends Uni.COptions {
  itemList: string[];
  /**
   * Interface to invoke a successful callback function.
   */
  success?: (res?: ShowActionSheetRes) => void;
  /**
    * Interface to call a failed callback function.
    */
  fail?: (e?: Error) => void;
  /**
    * Interface callback function at the end of the call (executed on success and failure).
    */
  complete?: (res?: ShowActionSheetRes | Error) => void;
  [propName: string]: any;
}
