export interface Options {
  title?: string;
  content?: string;
  buttonText?: string;
  success?: () => any;
  fail?: (res) => any;
  complete?: (res?) => any;
}

export interface Alert {
  (options: Options): Promise<null>;
}
