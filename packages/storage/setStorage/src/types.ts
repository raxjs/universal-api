export interface OPTION_STRUCT {
  key: string;
  data: undefined | null | String | Object | Array<any> | Number | Date | Boolean;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}
