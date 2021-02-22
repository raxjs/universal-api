import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import image from '@uni/image';
import showModal from '@uni/show-modal';
import Image from 'rax-image';

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
  const [tempFilePaths, setTempFilePaths] = useState([]);
  const [quality, setQuality] = useState(0);
  const [src, setSrc] = useState('https://pic2.zhimg.com/v2-2a0434dd4e4bb7a638b8df699a505ca1_b.jpg');

  return (
    <View>
      {/* chooseImage */}
      <View style={styles.button} onClick={() => {
        image.chooseImage({
          count: 1,
          sourceType: ['album', 'camera']
        }).then(res => {
          console.log(res);
          setTempFilePaths(res.tempFilePaths);
        });
      }}>
      选择图片
      </View>
      {tempFilePaths.map(uri =>
        <View key={uri}>
          <View>{uri}</View>
          <Image style={{width: '100%', height: '400rpx'}} source={{uri}} />
        </View>
      )}
      {/* compressImage */}
      <View>
        <TextInput style={styles.input} value={src} placeholder="输入图片地址" onInput={({value}) => {
          setSrc(value);
        }} />
        <TextInput style={styles.input} value={quality} placeholder="输入压缩质量0~3" type="number" onInput={({value}) => {
          setQuality(value);
        }} />
        <View style={styles.button} onClick={() => {
          image.compressImage({src: tempFilePaths[0]}).then(res => {
            showModal({content: '压缩地址' + res.tempFilePath});
          });
        }}>压缩图片</View>
      </View>
      {/* getImageInfo */}
      <View style={styles.button} onClick={() => {
        image.getImageInfo({src: tempFilePaths[0]}).then(res => {
          console.log(res);
          showModal({content: '图片信息，宽度：' + res.width + '；高度：' + res.height + '；本地路径：' + res.path});
        });
      }}>获取图片信息</View>
  </View>
  );
}
