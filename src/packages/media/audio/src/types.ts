import { Uni } from '../../../../../types/interface';

// createInnerAudioContext
export interface InnerAudioContextOptions extends Uni.COptions {
  useWebAudioImplement?: boolean;
}

export interface InnerAudioContext {
  src?: string;
  startTime?: Number;
  autoplay?: boolean;
  loop?: boolean;
  obeyMuteSwitch?: boolean;
  duration?: Number;
  currentTime?: Number;
  paused?: Boolean;
  buffered?: Number;
  volume?: Number;
  playbackRate?: Number;
}

export type CreateInnerAudioContextFn = (args?: InnerAudioContextOptions) => any;

export interface AudioContext {
  // new (contextOptions?: any): AudioContext;
  destination: any;
  currentTime: number;
  state: string;
  resume: () => Promise<void>;
  suspend: () => Promise<void>;
  close: () => Promise<void>;
  createBufferSource: () => any;
  createGain: () => any;
  decodeAudioData: (args?) => any;
}
