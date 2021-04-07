/// <reference types="types/interface" />
export interface Options extends Uni.COptions {
    title?: string;
    content?: string;
    confirmColor?: string;
    buttonText?: string;
    success?: () => any;
    fail?: (res: any) => any;
    complete?: (res?: any) => any;
}
export interface Alert {
    (options: Options): Promise<null>;
}
