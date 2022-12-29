/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import keyboard from '@uni/keyboard';

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
    height: '60rpx',
    fontSize: '28rpx'
  }
};
const Index = () => {
  const handleClick = () => {
    keyboard.hide();
  };

  const handleFocus = () => {
    setTimeout(() => {
      keyboard.hide();
    }, 5 * 1000)
  }

  return (
    <View>
      <input style={styles.input} type="text" placeholder="点击弹出键盘" onFocus={handleFocus} />
      <View>键盘弹出5s后自动关闭</View>
      <View style={styles.button} onClick={handleClick}>
        <Text>点击手动收起键盘</Text>
      </View>
    </View>
  );
};
export default Index;