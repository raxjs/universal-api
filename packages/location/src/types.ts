// getLocation params
export interface OPTION_STRUCT {
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

// getLocation result
export interface RESPONSE_STRUCT {
  latitude: number;
  longitude: number;
  accuracy: number;
}

// openLocation params
export interface OPEN_OPTION_STRUCT {
  latitude: number;
  longtitude: number;
  name: string;
  address: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}
