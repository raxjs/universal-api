export interface OPTION_STRUCT {
  src: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface RESPONSE_STRUCT {
  width: number;
  height: number;
  path: string;
}
