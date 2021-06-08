import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import getRecorderManager from '@uni/recorder';
import toast from '@uni/toast';
import alert from '@uni/alert';

const styles = {
  flex: {
    flexDirection: 'row',
  },
  button: {
    margin: '10rpx',
    padding: '20rpx',
    background: '#17BD88',
    color: '#fff',
    fontSize: '26rpx',
    textAlign: 'center',
  },
  input: {
    border: '1px solid #eee',
    margin: '10rpx',
  },
};

export default function () {

  let recorderManager = null;
  
  useEffect(() => {
    recorderManager = getRecorderManager();

    recorderManager.onStart(() => {
      toast.showToast('监听到开始录音');
    });

    recorderManager.onPause(() => {
      toast.showToast('监听到暂停录音');
    });

    recorderManager.onResume(() => {
      toast.showToast('监听到继续录音');
    });

    recorderManager.onStop((res) => {
      alert({
        content: `音频录制结果：${JSON.stringify(res)}`,
        title: '停止录音',
        buttonText: '确定'
      });
    });
  }, []);

  return (
    <View>
      <View
        style={styles.button}
        onClick={() => {
          recorderManager.start();
        }}
      >
        开始录音
      </View>
      <View
        style={styles.button}
        onClick={() => {
          recorderManager.pause();
        }}
      >
        暂停录音
      </View>
      <View
        style={styles.button}
        onClick={() => {
          recorderManager.resume();
        }}
      >
        继续录音
      </View>
      <View
        style={styles.button}
        onClick={() => {
          recorderManager.stop();
        }}
      >
        停止录音
      </View>
    </View>
  );
}
