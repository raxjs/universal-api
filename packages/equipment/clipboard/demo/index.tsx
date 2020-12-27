import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import {getClipboard, setClipboard} from 'universal-clipboard';
import showModal from 'universal-show-modal';

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
  const [value, setValue] = useState('');

  return (
    <View>
      <View style={styles.button} onClick={() => {
        getClipboard().then(({text}) => {
          showModal({content: text});
        });
      }}>获取剪切板数据</View>
      <TextInput style={styles.input} placeholder="输入设置剪切板数据" value={value} onInput={({value}) => {
        console.log(value);
        setValue(value);
      }}></TextInput>
      <View style={styles.button} onClick={() => {
        console.log(value);
        setClipboard({text: value}).then(() => {
          showModal({title: '设置剪切板数据', content: value})
        });
      }}>设置剪切板数据</View>
    </View>
  );
}
