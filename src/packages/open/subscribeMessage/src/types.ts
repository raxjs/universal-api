import { Uni } from '../../../../../types/interface';

export interface Options extends Uni.COptions {
  tmplIds: any[];
  success?: (res?) => any;
  fail?: (res) => any;
  complete?: (res?) => any;
}
