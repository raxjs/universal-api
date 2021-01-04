// getLocation params
export interface OptionStruct {
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

// getLocation result
export interface ResponseStruct {
  latitude: number;
  longitude: number;
  accuracy: number;
}

// openLocation params
export interface OpenOptionStruct {
  latitude: number;
  longtitude: number;
  name: string;
  address: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}
