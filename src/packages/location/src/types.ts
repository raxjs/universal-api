import { Uni } from '../../../../types/interface';

// getLocation params
export interface OptionStruct extends Uni.COptions {
  type?: string;
  resultType?: number;
  cacheTimeout?: number;
  altitude?: boolean;
  needFullAccuracy?: boolean;
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
  longitude: string;
  scale: number;
  name: string;
  address: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

// chooseLocation options
export interface ChooseLocationOptions extends Uni.COptions {
  latitude?: number;
  longitude?: number;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

// chooseLocation response
export interface ChooseLocationResponse {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  provinceName?: string;
  cityName?: string;
}
