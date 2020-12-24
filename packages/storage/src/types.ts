export interface GET_OR_REMOVE_OPTION_STRUCT {
  key: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface GET_OR_REMOVE_SYNC_OPTION_STRUCT {
  key: string;
}

export interface SET_OPTION_STRUCT {
  key: string;
  data: undefined | null | String | Object | Array<any> | Number | Date | Boolean;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface SET_SYNC_OPTION_STRUCT {
  key: string;
  data: undefined | null | String | Object | Array<any> | Number | Date | Boolean;
}


