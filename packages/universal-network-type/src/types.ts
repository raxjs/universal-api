export interface Options {
  success?: (res: NetworkResult) => {};
  fail?: (err: any) => {};
  complete?: (res: any) => {};
}
export interface NetworkResult {
  networkType: string;
  networkAvailable?: boolean;
}

export interface NetworkType {
  getNetworkType(options?: Options): void
}
