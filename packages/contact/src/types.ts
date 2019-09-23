// docs should notice wechat needs firstName

export interface ICallback {
  (res?: any): void;
}
export interface IContactOptions {
  firstName?: string,
  photoFilePath?: string,
  nickName?: string,
  lastName?: string,
  middleName?: string,
  remark?: string,
  mobilePhoneNumber?: string,
  account?: string,
  addressCountry?: string,
  addressState?: string,
  addressCity?: string,
  addressStreet?: string,
  addressPostalCode?: string,
  organization?: string,
  title?: string,
  workFaxNumber?: string,
  workPhoneNumber?: string,
  hostNumber?: string,
  email?: string,
  url?: string,
  workAddressCountry?: string,
  workAddressState?: string,
  workAddressCity?: string,
  workAddressStreet?: string,
  workAddressPostalCode?: string,
  homeFaxNumber?: string,
  homePhoneNumber?: string,
  homeAddressCountry?: string,
  homeAddressState?: string,
  homeAddressCity?: string,
  homeAddressStreet?: string,
  homeAddressPostalCode?: string,
  success?: ICallback,
  fail?: ICallback,
  complete?: ICallback
}
export interface IContact {
  addPhoneContact(options: IContactOptions): void
}
