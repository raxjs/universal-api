/// <reference path='../../../../types/interface.d.ts'/>

// getLocation params
export interface OptionStruct extends Uni.COptions {
  success?: (res: ResponseStruct) => any;
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
export interface OpenOptionStruct extends Uni.COptions {
  latitude: string;
  longtitude: string;
  scale: number;
  name: string;
  address: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}
