export interface Device {
  platform: string;
  appName: string;
  screenWidth: number;
  screenHeight: number;
}

export interface MiniAppSystem {
  app: string;
  platform: string;
  screenWidth: number;
  screenHeight: number;
  [propName: string]: any;
}
