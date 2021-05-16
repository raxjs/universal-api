import { createElement, useState, useEffect, useRef, Fragment } from 'rax';
import View from 'rax-view';
import TextInput from 'rax-textinput';
import { chooseVideo, createVideoContext, chooseMedia } from '@uni/video';
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
  const [medias, setMedias] = useState(null);

  let videoContext = useRef(null);

  useEffect(() => {
    if (!videoContext.current) {
      videoContext.current = createVideoContext('demoVideo');
    }
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
        }).catch(e => {
          console.log(e);
        });
      }}>
      选择视频
      </View>
      {videoInfo && <Fragment>
        <View>视频信息：{JSON.stringify(videoInfo)}</View>
        <Video 
          id="demoVideo"
          src={videoInfo.tempFilePath}
          style={{ width: videoInfo.width || 300, height: videoInfo.height || 300 }}
        />  
        <View style={styles.button} onClick={() => {
          videoContext.current.play();
        }}>播放视频</View>
        <View style={styles.button} onClick={() => {
          videoContext.current.pause();
        }}>暂停视频</View>
        <View style={styles.button} onClick={() => {
          videoContext.current.stop();
        }}>停止视频</View>
      </Fragment>}
      <View style={styles.button} onClick={() => {
        chooseMedia().then(res => {
          setMedias(res);
        }).catch(e => {
          console.log(e);
        });
      }}>
        选择文件
      </View>
      {medias && <View>文件信息：{JSON.stringify(medias)}</View>}
    </View>
  );
}
