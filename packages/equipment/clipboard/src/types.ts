export interface CallBack {
  success?: (res?) => any;
  fail?: (res?) => any;
  complete?: (res?) => any;
}

export interface PARAMS extends CallBack {
  text: string;
}

export interface RESPONES {
  text: string
}
