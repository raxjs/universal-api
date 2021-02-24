import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import {getClipboard, setClipboard} from '@uni/clipboard';
import confirm from '@uni/confirm';

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
  const [value, setValue] = useState('');

  return (
    <View>
      <View style={styles.button} onClick={() => {
        getClipboard().then(({text}) => {
          confirm({content: text});
        });
      }}>获取剪切板数据</View>
      <TextInput style={styles.input} placeholder="输入设置剪切板数据" value={value} onInput={({value}) => {
        console.log(value);
        setValue(value);
      }} />
      <View style={styles.button} onClick={() => {
        console.log(value);
        setClipboard({text: value}).then(() => {
          confirm({title: '设置剪切板数据', content: value});
        });
      }}>设置剪切板数据</View>
    </View>
  );
}
