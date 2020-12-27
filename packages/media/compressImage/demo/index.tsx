import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import Image from 'rax-image';
import compressImage from 'universal-compress-image';
import showModal from 'universal-show-modal';
import chooseImage from 'universal-choose-image';

const styles = {
  flex: {
    flexDirection: 'row'
  },
  button: {
    margin: '10rpx',
    padding: '20rpx',
    background: 'rgb(38, 115, 67)',
    color: '#fff',
    fontSize: '26rpx',
    textAlign: 'center'
  },
  input: {
    border: '1px solid #eee',
    margin: '10rpx'
  }
}

export default function() {
  const [src, setSrc] = useState('');
  const [quality, setQuality] = useState(0);
  const [tempFilePaths, setTempFilePaths] = useState([]);

  return (
    <View>
      <View>
        <View style={styles.button} onClick={() => {
          chooseImage({
            count: 1,
            sourceType: ['album', 'camera']
          }).then(res => {
            console.log(res);
            setTempFilePaths(res.tempFilePaths)
            setSrc(res.tempFilePaths[0]);
          });
        }}>
          选择图片
        </View>
        {tempFilePaths.map(uri => 
          <View key={uri}>
            <View>{uri}</View>
            <Image style={{width: '100%', height: '400rpx'}} source={{uri}}></Image>
          </View>
        )}
      </View>
      <TextInput style={styles.input} value={src} placeholder="输入图片地址" onInput={({value}) => {
        setSrc(value);
      }}></TextInput>
      <TextInput style={styles.input} value={quality} placeholder="输入压缩质量0~3" type="number" onInput={({value}) => {
        setQuality(value);
      }}></TextInput>
      <View style={styles.button} onClick={() => {
        compressImage({src}).then(res => {
          showModal({content: '压缩地址' + res.tempFilePath});
        });
      }}>压缩图片</View>
    </View>
  );
}
