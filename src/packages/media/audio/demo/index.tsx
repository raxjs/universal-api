/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement, setState, useState, useEffect } from 'rax';
import {
  registerNativeEventListeners,
  addNativeEventListener,
  removeNativeEventListener,
  usePageShow,
} from 'rax-app';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import Audio from '@uni/audio';
import Toast from '@uni/toast';
import { isWeb, isMiniApp } from '@uni/env';

const styles = {
  flex: {
    flexDirection: 'row'
  },
  button: {
    margin: '10rpx',
    padding: '20rpx',
    background: '#17BD88',
    color: '#fff',
    fontSize: '26rpx',
    textAlign: 'center'
  },
  text: {
    marginTop: '100rpx',
    padding: '20rpx',
    fontSize: '26rpx',
    textAlign: 'center',
    color: 'green',
  },
  container: {
    marginTop: '100rpx',
  },
  input: {
    margin: '20rpx',
    borderBottom: 'solid #32a1ce',
    color: '#32a1ce'
  }
};
const Index = () => {
  const [innerAudioContext, setInnerAudioContext] = useState();
  useEffect(() => {
    if (isMiniApp) {
      Toast.showToast({
        content: 'IDE 模拟器暂不支持调试，请以真机调试结果为准',
      });
    }
    const innerAudioContext = Audio.createInnerAudioContext();
    // 注意 xhr 获取src时http跨域问题
    // innerAudioContext.src = 'https://b.bdstatic.com/miniapp/images/yanyuan.mp3';
    // innerAudioContext.src = 'http://music.163.com/song/media/outer/url?id=28815250.mp3';
    // innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
    innerAudioContext.src = 'https://static.yximgs.com/udata/pkg/miniprogram-outer/test.m4a';
    innerAudioContext.autoplay = false;
    // innerAudioContext.loop = true;
    innerAudioContext.startTime = 0;
    innerAudioContext.playbackRate = 2;

    innerAudioContext.onPlay(res => {
      Toast.showToast({
        content: '音频播放',
        
      });
      console.log('onPlay', res);
    });

    innerAudioContext.onCanplay(res => {
      Toast.showToast({
        content: '音频进入可播放状态',
        
      });
      console.log('onCanplay', res);
      innerAudioContext.offCanplay(res => {
        Toast.showToast({
          content: '关闭监听音频进入可播放状态',
          
        });
        console.log('offCanplay', res);
      })
    });

    innerAudioContext.onPause(res => {
      Toast.showToast({
        content: '音频暂停',
        
      });
      console.log('onPause', res);
    });

    innerAudioContext.onStop(res => {
      Toast.showToast({
        content: '音频停止',
        
      });
      console.log('onStop', res);
    });

    innerAudioContext.onEnded(res => {
      Toast.showToast({
        content: '音频自然播放结束',
        
      });
      console.log('onEnded', res);
    });

    // innerAudioContext.onTimeUpdate(res => {
    //   console.log('onTimeUpdate', res);
    // });

    innerAudioContext.onError(err => {
      Toast.showToast({
        content: JSON.stringify(err)
      });
      console.log('onError', err);
    });

    innerAudioContext.onWaiting(res => {
      Toast.showToast({
        content: '音频加载中......',
        
      });
      console.log('onWaiting', res);
    });
  

    setInnerAudioContext(innerAudioContext);
  }, [])


  const play = () => {
    innerAudioContext.play();
  };
  const pause = () => {
    innerAudioContext.pause();
  };
  const stop = () => {
    innerAudioContext.stop();
  };
  const seek = () => {
    innerAudioContext.seek(30);
    Toast.showToast({
      content: '跳转到音频30s处',
      
    });
  };
  const destroy = () => {
    innerAudioContext.destroy();
    Toast.showToast({
      content: '音频销毁，需要重新触发创建时期',
      
    });
  };
  const offTimeUpdate = () => {
    innerAudioContext.offTimeUpdate(res => {
      Toast.showToast({
        content: 'offTimeUpdate',
        
      });
      console.log('offTimeUpdate', res);
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: '20rpx'}}>
        <View style={styles.button} onClick={play}>
          <Text>play</Text>
        </View>
        <View style={styles.button} onClick={pause}>
          <Text>pause</Text>
        </View>
        <View style={styles.button} onClick={stop}>
          <Text>stop</Text>
        </View>
        <View style={styles.button} onClick={seek}>
          <Text>seek</Text>
        </View>
        <View style={styles.button} onClick={destroy}>
          <Text>destroy</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;