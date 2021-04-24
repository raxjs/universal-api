import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import getRecorderManager from '@uni/recorder';

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
          recorderManager.stop();
        }}
      >
        停止录音
      </View>
    </View>
  );
}
