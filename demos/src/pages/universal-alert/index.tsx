import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import alert from 'universal-alert';

const Index = () => {
  return (
    <View>
      <View onClick={() => alert({
        content: '我是一个弹窗',
        title: '弹窗',
        buttonText: '确定'
      })}>
        <Text>点击弹出普通弹窗</Text>
      </View>
      <View onClick={() => alert({
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
        <Text>点击监听点击</Text>
      </View>
    </View>
  );
};
export default Index;