/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Toast from 'universal-toast';

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
const Index = () => {
  return (
    <View>
      <View style={styles.button} onClick={() => Toast.show('默认提示')}>
        <Text>点击弹出普通弹窗</Text>
      </View>
      <View style={styles.button} onClick={() => Toast.show({type: 'success', content: 'success提示'})}>
        <Text>点击弹出success弹窗</Text>
      </View>
      <View style={styles.button} onClick={() => Toast.show({type: 'fail', content: 'fail提示'})}>
        <Text>点击弹出fail弹窗</Text>
      </View>
      <View style={styles.button} onClick={() => Toast.show({type: 'none', content: '5s提示', duration: 5000})}>
        <Text>点击弹出5s弹窗</Text>
      </View>
      <View style={styles.button} onClick={() => Toast.hide()}>
        <Text>点击关闭弹窗</Text>
      </View>
    </View>
  );
};
export default Index;