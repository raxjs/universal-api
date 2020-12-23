export interface ToastOption {
  SHORT: number;
  LONG: number;
  show: (options: ShowToastOption) => void;
  hide: (options?: HideToastOption) => void;
};
export interface ShowToastOption {
  content: string;
  type?: 'success' | 'fail' | 'none';
  duration?: number;
  success?: () => any;
  fail?: (res) => any;
  complete?: (res?) => any;
}
export interface HideToastOption {
  success?: () => any;
  fail?: (res) => any;
  complete?: (res?) => any;
}

export interface WebQueueOption {
  message: string;
  duration: number;
  icon?: 'success' | 'fail' | 'none';
  success?: () => void;
  fail?: (res) => void;
  complete?: (res?) => void;
};