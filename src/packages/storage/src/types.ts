import { Uni } from '../../../../types/interface';

export interface GetOrRemoveOptionStruct extends Uni.COptions {
  key: string;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface GetOrRemoveSyncOptionStruct extends Uni.COptions {
  key: string;
}

export interface GetStorageSyncRes {
  data: any;
}

export type GetStorageRes = Promise<GetStorageSyncRes>;

export interface SetOptionStruct extends Uni.COptions {
  key: string;
  data: undefined | null | string | Record<string, any> | any[] | number | Date | boolean;
  success?: (res) => any;
  fail?: (res) => any;
  complete?: (res) => any;
}

export interface SetSyncOptionStruct extends Uni.COptions {
  key: string;
  data: undefined | null | string | Record<string, any> | any[] | number | Date | boolean;
}

