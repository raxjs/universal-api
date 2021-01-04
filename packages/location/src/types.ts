// getLocation params
export interface optionStruct {
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

// getLocation result
export interface responseStruct {
  latitude: number;
  longitude: number;
  accuracy: number;
}

// openLocation params
export interface openOptionStruct {
  latitude: number;
  longtitude: number;
  name: string;
  address: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}
