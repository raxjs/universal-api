import { Uni } from '../../../../../types/interface';

export interface Options extends Uni.COptions {
  scrollTop?: number;
  duration?: number;
  selector?: string;
  success?: (res: any) => void;
  fail?: (err: any) => void;
  complete?: (res: any) => void;
}
