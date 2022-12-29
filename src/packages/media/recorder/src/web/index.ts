/* eslint-disable  */

const getUserMedia = (constraints) => {
  const navigate: any = navigator;
  const rawGetUserMedia = (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) || navigate.getUserMedia || navigate.webkitGetUserMedia || navigate.mozGetUserMedia;

  if (!rawGetUserMedia) {
    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
  }

  return rawGetUserMedia.call((navigator.mediaDevices || navigator), constraints);
};

const getAudioMedia = () => {
  return getUserMedia({ audio: true });
}

function recorderManger () {
  this.duration = 60000;
  this.sampleRate = 8000;
  this.numberOfChannels = 2;
  this.encodeBitRate = 48000;
  this.format = 'aac';
  this.frameSize = -1;
  this.mediaRecorder = null;
  this.chunks = [];
  this.curDuration = 0;
  this.timer = null;
  this.events = {};
}

recorderManger.prototype.start = function (args) {
  if (args && typeof args === 'object') {
    for (const key in args) {
      if (Object.prototype.hasOwnProperty.call(args, key)) {
        this[key] = args[key];
      }
    }
  }
  getAudioMedia().then(stream => {
    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.onstart = this.events.onstart;
    this.mediaRecorder.onpause = this.events.onpause;
    this.mediaRecorder.onresume = this.events.onresume;
    this.mediaRecorder.onstop = this.events.onstop;
    this.mediaRecorder.ondataavailable = this.events.ondataavailable;
    this.mediaRecorder.onerror = this.events.onerror;
    
    if (this.frameSize > 0) {
      this.mediaRecorder.start(this.frameSize);
    } else {
      this.mediaRecorder.start();
    }
  }).catch(() => {
    throw new Error('@uni/apis: getRecorderManager不支持');
  });
}

recorderManger.prototype.pause = function () {
  this.mediaRecorder && this.mediaRecorder.state === 'recording' && this.mediaRecorder.pause();
}

recorderManger.prototype.resume = function () {
  this.mediaRecorder && this.mediaRecorder.state === 'paused' && this.mediaRecorder.resume();
}

recorderManger.prototype.stop = function () {
  this.mediaRecorder && this.mediaRecorder.state === 'recording' && this.mediaRecorder.stop();
}

recorderManger.prototype.onStart = function (callback = () => {}) {
  this.events.onstart = () => {
    this.clear();

    this.timer = setInterval(() => {
      if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
        this.curDuration += 500;

        if (this.curDuration >= this.duration) {
          this.curDuration -= 500;
          this.stop();
        }
      }
    }, 500);

    callback();
  };
}

recorderManger.prototype.onPause = function (callback = () => {}) {
  this.events.onpause = callback;
}

recorderManger.prototype.onResume = function (callback = () => {}) {
  this.events.onresume = callback;
}

recorderManger.prototype.onStop = function (callback = (res) => {}) {
  this.events.onstop = () => {
    const blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' });
    const tempFilePath = window.URL.createObjectURL(blob);
    const fileSize = blob.size;
    const duration = this.curDuration + 500;
    this.clear();
    callback({
      tempFilePath,
      fileSize,
      duration
    });
  };
}

recorderManger.prototype.onFrameRecorded = function (callback = (data) => {}) {
  this.events.ondataavailable = (e) => {
    this.chunks.push(e.data);
    callback(e.data);
  };
}

recorderManger.prototype.onError = function (callback = (e) => {}) {
  this.events.onerror = (e) => {
    this.clear();
    callback(e);
  };
}

recorderManger.prototype.clear = function () {
  this.chunks = [];
  clearInterval(this.timer);
  this.timer = null;
  this.curDuration = 0;
};

const singleRecorderManager = new recorderManger();

// 使用单例返回全局唯一的录音管理器
const getRecorderManager = () => {
  return singleRecorderManager;
} 

export default getRecorderManager;
