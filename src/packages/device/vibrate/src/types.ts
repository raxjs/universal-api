export interface Params {
  success?: (res?) => any;
  fail?: (res?) => any;
  complete?: (res?) => any;
}

export interface ShortPARAMS extends Params {
  type?: 'heavy' | 'medium' | 'light';
}
