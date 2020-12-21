enum SOURCE_TYPE {
  album,
  camera
}

export interface OPTION_STRUCT {
  count?: number;
  sourceType?: Array<keyof typeof SOURCE_TYPE>;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface RESPONSE_STRUCT {
  tempFilePaths: Array<string>;
}
