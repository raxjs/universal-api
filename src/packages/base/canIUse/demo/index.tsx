import { createElement, useState } from 'rax';
import View from 'rax-view';
import TextInput from 'rax-textinput';
import canIUse from '@uni/caniuse';

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
      <View>请输入api或包名，如'clipboard.getClipboard'或'clipboard'</View>
      <TextInput style={styles.input} placeholder="输入验证的api" value={value} onInput={({value}) => {
        console.log(value);
        setValue(value);
      }} />
      <View>结果：{canIUse(value) + ''}</View>
    </View>
  );
}
