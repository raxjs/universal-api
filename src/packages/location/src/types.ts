// getLocation params
export interface OptionStruct {
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

// getLocation result
export interface ResponseStruct {
  latitude: string;
  longitude: string;
  accuracy: string;
  horizontalAccuracy: string;
}

// openLocation params
export interface OpenOptionStruct {
  latitude: string;
  longtitude: string;
  scale: number;
  name: string;
  address: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}
