/// <reference path='../../../../../types/interface.d.ts'/>

export interface Options extends Uni.COptions {
  title?: string;
  content?: string;
  confirmColor?: string;
  buttonText?: string;
  success?: () => any;
  fail?: (res) => any;
  complete?: (res?) => any;
}

export interface Alert {
  (options: Options): Promise<null>;
}
