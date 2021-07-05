import { Uni } from '../../../../../types/interface';

export interface ScanCodeRes {
  /**
   * Content of code to scan.
   */
  result: string;
  /**
   * Type of code to scan.
   */
  scanType: string;
  /**
   * Base64 encoded raw data.
   */
  rawData: string;
}
type scanType = 'barCode' | 'qrCode' | 'dmCode' | 'pdf417Code' ;
export interface ScanCodeOptions extends Uni.COptions {
  hideAlbum?: boolean;
  scanType?: scanType[];
  /**
   * Interface to invoke a successful callback function.
   */
  success?: (res?: ScanCodeRes) => void;
  /**
    * Interface to call a failed callback function.
    */
  fail?: (e?: Error) => void;
  /**
    * Interface callback function at the end of the call (executed on success and failure).
    */
  complete?: (res?: ScanCodeRes | Error) => void;
}
