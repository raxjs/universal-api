export interface GetOrRemoveOptionStruct {
  key: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface GetOrRemoveSyncOptionStruct {
  key: string;
}

export interface SetOptionStruct {
  key: string;
  data: undefined | null | string | Record<string, any> | any[] | number | Date | boolean;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface SetSyncOptionStruct {
  key: string;
  data: undefined | null | string | Record<string, any> | any[] | number | Date | boolean;
}


