enum QUALITY {
  NO,
  LOW,
  MEDIUM,
  HIGH
}

export interface OPTION_STRUCT {
  src: string;
  quality?: QUALITY;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface RESPONSE_STRUCT {
  tempFilePath: string;
}
