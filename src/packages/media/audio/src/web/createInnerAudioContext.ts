/* eslint-disable  */
// import { AudioContext } from '../types';
import Events from '@utils/event';

declare var AudioContext;

class InnerAudioContext {
  private _singleAudioContext: AudioContext;
  private _source: AudioBufferSourceNode;
  private _gainNode: GainNode;
  private _src = '';
  private _startTime = 0;
  private _autoplay = false;
  private _buffer: AudioBuffer;
  private _events: any = new Events();
  private _isPlaying = false;
  constructor() {
    // super();

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

    const singleAudioContext = new AudioContext();
    this._singleAudioContext = singleAudioContext;

    // 创建播放对象节点
    this._source = this._singleAudioContext.createBufferSource();
    // 创建音量节点(如果你需要用调整音量大小的话)
    this._gainNode = this._singleAudioContext.createGain();
    // this.addEventListener('ended', () => {
    //   this._events.emit('onEnded');
    // });
  }
  get src() {
    return this._src;
  }
  set src(value) {
    this._src = value;
    this._getData();
  }

  get startTime() {
    return this._startTime;
  }

  set startTime(value) {
    this._startTime = value;
  }

  get autoplay() {
    return this._autoplay;
  }

  set autoplay(value) {
    this._autoplay = value;
  }

  get loop() {
    return this._source.loop;
  }

  set loop(value) {
    this._source.loop = value;
  }

  get duration() {
    return this._buffer.duration;
  }

  get currentTime() {
    return this._singleAudioContext.currentTime;
  }

  get paused() {
    return this._singleAudioContext.state === 'suspended';
  }

  get volume() {
    return this._gainNode.gain.value;
  }

  set volume(value) {
    this._gainNode.gain.value = value;
  }

  get playbackRate() {
    return this._source.playbackRate.value;
  }

  set playbackRate(value) {
    this._source.playbackRate.value = value;
  }

  _start = (startTime) => {
    // 填充音频buffer数据
    // 创建播放对象节点
    this._source = this._singleAudioContext.createBufferSource();
    // 创建音量节点(如果你需要用调整音量大小的话)
    this._gainNode = this._singleAudioContext.createGain();
    // this.addEventListener('onPaly', this.onPaly);
    this._source.buffer = this._buffer;
    console.log('buffer', this._buffer);
    this._source.loop = this.loop;
    this._source.playbackRate.value = this.playbackRate;
    this._gainNode.gain.value = this.volume;
    // 连接节点对象
    this._source.connect(this._gainNode);
    this._gainNode.connect(this._singleAudioContext.destination);

    // this._source.onended();
    this._source.start(0, startTime);
  };

  _getData = () => {
    console.log('get data start', this);
    this._events.emit('onWaiting');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this._src, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      this._singleAudioContext.decodeAudioData(xhr.response, (buffer) => {
        this._buffer = buffer;
        this._events.emit('onCanplay');
        this.autoplay && this.play();
      });
    };
    xhr.send();
  };

  play = () => {
    if (!this._isPlaying) {
      this._start(this._startTime);
      console.log('currentTime', this.currentTime);
      this._isPlaying = true;
    }

    this._singleAudioContext.resume()
      .then(() => this._events.emit('onPlay'))
      .catch((e) => {
        if (JSON.stringify(e).indexOf('cannot resume a closed AudioContext') !== -1) {
          this._events.emit('onError', 'cannot resume a closed AudioContext');
          return;
        }
        console.log(e);
        this._events.emit('onError', e);
      });
  };

  pause = () => {
    console.log('currentTime', this.currentTime);
    this._singleAudioContext.suspend()
      .then(() => this._events.emit('onPause'))
      .catch((e) => {
        console.log(e);
        this._events.emit('onError', e);
      });
  };

  stop = () => {
    try {
      this._source.stop(0);
      console.log('currentTime', this.currentTime);
      this._isPlaying = false;
      this._events.emit('onStop');
    } catch (e) {
      this._events.emit('onError', e);
    }
  };

  seek = (value) => {
    try {
      this._events.emit('onSeeking');
      value = value < 0 ? 0 : value;
      value = value > this.duration ? this.duration : value;
      this._source.stop(0);
      this._start(value);
      this._events.emit('onSeeked');
    } catch (e) {
      this._events.emit('onError', e);
    }
  };

  destroy = () => {
    this._singleAudioContext.close()
      .then(() => this._events.emit('onDestroy'))
      .catch((e) => {
        console.log(e);
        this._events.emit('onError', e);
      });
  };

  onCanplay = (callback = (e) => {}) => {
    this._events.register('onCanplay', (e) => {
      console.log('onCanplay');
      callback(e);
    });
  };

  offCanplay = (callback = () => {}) => {
    this._events.events.onCanplay.clear();
    callback();
  };

  onPlay = (callback = (e) => {}) => {
    this._events.register('onPlay', (e) => {
      console.log('onPlay');
      callback(e);
    });
  };

  offPlay = (callback = () => {}) => {
    this._events.events.onPlay.clear();
    callback();
  };

  onPause = (callback = (e) => {}) => {
    this._events.register('onPause', (e) => {
      console.log('onPause');
      callback(e);
    });
  };

  offPause = (callback = () => {}) => {
    this._events.events.onPause.clear();
    callback();
  };

  onStop = (callback = (e) => {}) => {
    this._events.register('onStop', (e) => {
      console.log('onStop');
      callback(e);
    });
  };

  offStop = (callback = () => {}) => {
    this._events.events.onStop.clear();
    callback();
  };

  onEnded = (callback = (e) => {}) => {
    this._events.register('onEnded', (e) => {
      console.log('onEnded');
      callback(e);
    });
  };

  offEnded = (callback = () => {}) => {
    this._events.events.onEnded.clear();
    callback();
  };

  onError = (callback = (e) => {}) => {
    this._events.register('onError', (e) => {
      console.log('onError222');
      callback(e);
    });
  };

  offError = (callback = () => {}) => {
    this._events.events.onError.clear();
    callback();
  };

  onWaiting = (callback = (e) => {}) => {
    this._events.register('onWaiting', (e) => {
      console.log('onWaiting');
      callback(e);
    });
  };

  offWaiting = (callback = () => {}) => {
    this._events.events.onWaiting.clear();
    callback();
  };

  onSeeking = (callback = (e) => {}) => {
    this._events.register('onSeeking', (e) => {
      console.log('onSeeking');
      callback(e);
    });
  };

  offSeeking = (callback = () => {}) => {
    this._events.events.onSeeking.clear();
    callback();
  };

  onSeeked = (callback = (e) => {}) => {
    this._events.register('onSeeked', (e) => {
      console.log('onSeeked');
      callback(e);
    });
  };

  offSeeked = (callback = () => {}) => {
    this._events.events.onSeeked.clear();
    callback();
  };
}

let singleInnerAudioContext: InnerAudioContext;

// 使用单例返回全局唯一的录音管理器
const createInnerAudioContext = (): any => {
  if (singleInnerAudioContext) {
    return singleInnerAudioContext;
  }
  singleInnerAudioContext = new InnerAudioContext();
  return singleInnerAudioContext;
};

export default createInnerAudioContext;
