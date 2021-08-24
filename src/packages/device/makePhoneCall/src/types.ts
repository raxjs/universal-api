import { Uni } from '../../../../../types/interface';

export interface Options extends Uni.COptions {
  phoneNumber: string;
  code?: string; // (Only dingtalk) International telephone code, china is `+86`
  showDingCall?: boolean; // (Only dingtalk) Whether to show the ding call
}
