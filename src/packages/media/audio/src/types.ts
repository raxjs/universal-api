import { Uni } from '../../../../../types/interface';

// createAudioContext
export interface AudioContextOptions extends Uni.COptions {
  useWebAudioImplement?: boolean;
}

export interface AudioContext {
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

export type CreateAudioContextFn = (args?: AudioContextOptions) => any;

// export interface AudioContext {
//   // new (contextOptions?: any): AudioContext;
//   destination: any;
//   currentTime: number;
//   state: string;
//   resume: () => Promise<void>;
//   suspend: () => Promise<void>;
//   close: () => Promise<void>;
//   createBufferSource: () => any;
//   createGain: () => any;
//   decodeAudioData: (args?) => any;
// }
