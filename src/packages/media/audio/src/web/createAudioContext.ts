/* eslint-disable  */
// import { AudioContext } from '../types';
import Events from '@utils/event';

class InnerAudioContext {
  private _audioContext: AudioContext;
  private _source: AudioBufferSourceNode;
  private _gainNode: GainNode;
  private _src = '';
  private _startTime = 0; // time of the audio playback, seconds, user set
  private _playbackTime = 0; // time of the audio playback, seconds
  private _autoplay = false;
  private _buffer: AudioBuffer;
  private _events: any = new Events();
  private _currentTime = 0;
  private _loop = false;
  private _volume = 1;
  private _playbackRate = 1;
  private _eventDeleteCallback = {};
  private _isWaiting = true;
  private _isSeeking = false; // 记录是否正在Seeking
  private _isPlaying = false;
  private _startTimestamp = 0; // timestamp of last playback start, milliseconds
  constructor() {
    // super();

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

    this._audioContext = new AudioContext();

    // 创建播放对象节点
    this._source = this._audioContext.createBufferSource();
    // 创建音量节点(如果你需要用调整音量大小的话)
    this._gainNode = this._audioContext.createGain();
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
    this._playbackTime = value;
  }

  get autoplay() {
    return this._autoplay;
  }

  set autoplay(value) {
    this._autoplay = value;
  }

  get loop() {
    return this._source?.loop || this._loop;
  }

  set loop(value) {
    this._source.loop = value;
    this._loop = value;
  }

  get duration() {
    return this._buffer?.duration || 0;
  }

  get currentTime() {
    if (this._isPlaying) {
      this._currentTime = (Date.now() - this._startTimestamp)/1000 + this._playbackTime;
    }
    return this._currentTime;
  }

  get paused() {
    return !this._isPlaying;
  }

  get volume() {
    return this._gainNode?.gain?.value || this._volume;
  }

  set volume(value) {
    this._gainNode.gain.value = value;
    this._volume = value;
  }

  get playbackRate() {
    return this._source?.playbackRate?.value || this._playbackRate;
  }

  set playbackRate(value) {
    this._source.playbackRate.value = value;
    this._playbackRate = value;
  }

  _start = (startTime) => {
    // 填充音频buffer数据
    // 创建播放对象节点
    this._source = this._audioContext.createBufferSource();
    // 创建音量节点(如果你需要用调整音量大小的话)
    this._gainNode = this._audioContext.createGain();
    // this.addEventListener('onPaly', this.onPaly);
    this._source.buffer = this._buffer;
    // console.log('buffer', this._buffer);
    this._source.loop = this._loop;
    this._source.playbackRate.value = this._playbackRate;
    this._gainNode.gain.value = this._volume;
    this._source.onended = () => { 
      // console.log('this._isSeeking', this._isSeeking);
      // seek 调用了 source.stop, 会触发onended 事件
      // 此处避开 seek 引发的onended
      if (this._isSeeking) {
        this._isSeeking = false;
        this.currentTime;
        return;
      }
      if (this._isPlaying) this._playbackTime = 0;
      this._isPlaying = false;
      this._events.emit('onEnded');
    }
    // 连接节点对象
    this._source.connect(this._gainNode);
    this._gainNode.connect(this._audioContext.destination);
    this._source.start(0, startTime);
  };

  _getData = () => {
    // console.log('get data start', this);
    this._isWaiting = true;
    this._events.emit('onWaiting');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this._src, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      this._audioContext.decodeAudioData(xhr.response, (buffer) => {
        this._buffer = buffer;
        this._events.emit('onCanplay');
        this._isWaiting = false;
        this.autoplay && this.play();
      });
    };
    xhr.send();
  };

  play = () => {
    if (this._isPlaying) return;
    this._start(this._playbackTime);
    this._currentTime = this._playbackTime;
    this._startTimestamp = Date.now();
    this._isPlaying = true;
    this._events.emit('onPlay')
  };

  pause = () => {
    this.stop(true);
    this._events.emit('onPause');
  };

  stop = (pause = false) => {
    try {
      if (!this._isPlaying) {
        if (!pause) { // 未播放 stop 时 需要设置为 0
          this._playbackTime = 0;
          this._currentTime = 0;
        }
        return;
      }
      // if (this._isPlaying) {
      this._isPlaying = false;
      this._source.stop(0);
      // }
      this._playbackTime = pause ? (Date.now() - this._startTimestamp)/1000 + this._playbackTime : 0;
      this._currentTime = this._playbackTime;
      this._events.emit('onStop');
      !this._isWaiting && this._events.emit('onCanplay');
    } catch (e) {
      this._events.emit('onError', e);
    }
  };

  seek = async (playbackTime) => {
    try {
      if (playbackTime === undefined) return;
      if (playbackTime > this.duration) {
        this._events.emit('onError', 'Seek time is greater than duration of audio buffer.');
        return;
      }

      this._events.emit('onSeeking');
      if (this._isPlaying) {
        this._isSeeking = true;
        this.stop();
        this._playbackTime = playbackTime;
        this.play();
      } else {
        this._playbackTime = playbackTime;
        this._currentTime = playbackTime;
      }

      this._events.emit('onSeeked');
    } catch (e) {
      this._events.emit('onError', e);
    }
  };

  destroy = () => {
    this._currentTime = this._playbackTime;
    this._isPlaying = false;
    this._audioContext.close()
      .then(() => this._events.emit('onDestroy'))
      .catch((e) => {
        // console.log(e);
        this._events.emit('onError', e);
      });
  };

  onCanplay = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onCanplay', (e) => {
      // console.log('onCanplay');
      callback(e);
    });
  };

  offCanplay = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onCanplay?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };

  onPlay = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onPlay', (e) => {
      // console.log('onPlay');
      callback(e);
    });
  };

  offPlay = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onPlay?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };

  onPause = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onPause', (e) => {
      // console.log('onPause');
      callback(e);
    });
  };

  offPause = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onPause?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };

  onStop = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onStop', (e) => {
      // console.log('onStop');
      callback(e);
    });
  };

  offStop = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onStop?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };

  onEnded = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onEnded', (e) => {
      // console.log('onEnded');
      callback(e);
    });
  };

  offEnded = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onEnded?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };

  onError = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onError', (e) => {
      // console.log('onError222');
      callback(e);
    });
  };

  offError = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onError?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };

  onWaiting = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onWaiting', (e) => {
      // console.log('onWaiting');
      callback(e);
    });
  };

  offWaiting = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onWaiting?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };

  onSeeking = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onSeeking', (e) => {
      // console.log('onSeeking');
      callback(e);
    });
  };

  offSeeking = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onSeeking?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };

  onSeeked = (callback = (e) => {}) => {
    this._eventDeleteCallback[callback.toString()] = this._events.register('onSeeked', (e) => {
      // console.log('onSeeked');
      callback(e);
    });
  };

  offSeeked = (callback?: (args?: any) => {}) => {
    if (!callback) {
      this._events.events?.onSeeked?.clear();
      return;
    }
    this._eventDeleteCallback[callback.toString()] && this._eventDeleteCallback[callback.toString()]();
  };
}

// 创建audio
const createAudioContext = (): any => {
  let singleInnerAudioContext = new InnerAudioContext();
  return singleInnerAudioContext;
};

export default createAudioContext;
