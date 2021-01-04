export interface getOrRemoveOptionStruct {
  key: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface getOrRemoveSyncOptionStruct {
  key: string;
}

export interface setOptionStruct {
  key: string;
  data: undefined | null | String | Object | Array<any> | Number | Date | Boolean;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface setSyncOptionStruct {
  key: string;
  data: undefined | null | String | Object | Array<any> | Number | Date | Boolean;
}


