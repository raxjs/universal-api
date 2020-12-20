export interface PARAMS {
  text: string;
  success?: (res?) => any;
  fail?: (res?) => any;
  complete?: (res?) => any;
}