import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import alert from 'universal-alert';

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
};
const Index = () => {
  return (
    <View>
      <View style={styles.button} onClick={() => alert({
        content: '我是一个弹窗',
        title: '弹窗',
        buttonText: '确定'
      })}>
        点击弹出普通弹窗
      </View>
      <View style={styles.button} onClick={() => alert({
        content: '我是一个弹窗',
        title: '弹窗',
        buttonText: '确定',
        success: () => {
          alert({
            content: '你点击了确定',
            title: '弹窗',
            buttonText: '确定'
          });
        }
      })}>
       点击监听点击
      </View>
    </View>
  );
};
export default Index;