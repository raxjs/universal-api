import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import getImageInfo from 'universal-getimageinfo';
import showModal from 'universal-modal';

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
  const [src, setSrc] = useState('https://inews.gtimg.com/newsapp_bt/0/9761777632/641');

  return (
    <View>
      <TextInput style={styles.input} placeholder="输入图片地址" value={src} onInput={({value}) => {
        setSrc(value);
      }}></TextInput>
      <View style={styles.button} onClick={() => {
        getImageInfo({src}).then(res => {
          console.log(res);
          showModal({content: '图片信息，宽度：' + res.width + '；高度：' + res.height + '；本地路径：' + res.path});
        });
      }}>获取图片信息</View>
    </View>
  );
}
