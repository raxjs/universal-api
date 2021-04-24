import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import TextInput from 'rax-textinput';
import { chooseVideo, createVideoContext } from '@uni/video';
import Video from 'rax-video';

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
  input: {
    border: '1px solid #eee',
    margin: '10rpx'
  }
};

export default function() {
  const [maxDuration, setMaxDuration] = useState(60);
  const [videoInfo, setVideoInfo] = useState(null);

  let videoContext = null;

  useEffect(() => {
    videoContext = createVideoContext('demoVideo');
  }, [])

  return (
    <View>
      <TextInput style={styles.input} value={maxDuration} placeholder="输入视频最大时长" type="number" onInput={({value}) => {
        setMaxDuration(+value);
      }} />
      <View style={styles.button} onClick={() => {
        chooseVideo({
          maxDuration
        }).then(res => {
          setVideoInfo(res);
        });
      }}>
      选择图片
      </View>
      <View>视频信息：{JSON.stringify(videoInfo)}</View>
      <Video 
        id="demoVideo"
        src={videoInfo.tempFilePath}
        style={{ width: videoInfo.width, height: videoInfo.height }}
      />
      {videoInfo && <View style={styles.button} onClick={() => {
        videoContext.play();
      }}>context控制播放视频</View>}
    </View>
  );
}
