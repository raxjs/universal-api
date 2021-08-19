import { Uni } from '../../../../types/interface';

export interface Options extends Uni.COptions {
  withShareTicket?: boolean;
  menus?: string[];
  title?: string;
  content?: string;
  imageUrl?: string;
  path?: string;
  success?: (res?) => any;
  fail?: (res) => any;
  complete?: (res?) => any;
}
