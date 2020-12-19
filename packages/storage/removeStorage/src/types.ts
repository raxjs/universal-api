export interface OPTION_STRUCT {
  key: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}
