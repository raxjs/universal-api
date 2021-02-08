import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import getImageInfo from '@uni/getimageinfo';
import showModal from '@uni/show-modal';

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
  const [src, setSrc] = useState('https://pic2.zhimg.com/v2-2a0434dd4e4bb7a638b8df699a505ca1_b.jpg');

  return (
    <View>
      <TextInput style={styles.input} placeholder="输入图片地址" value={src} onInput={({value}) => {
        setSrc(value);
      }} />
      <View style={styles.button} onClick={() => {
        getImageInfo({src}).then(res => {
          console.log(res);
          showModal({content: '图片信息，宽度：' + res.width + '；高度：' + res.height + '；本地路径：' + res.path});
        });
      }}>获取图片信息</View>
    </View>
  );
}
