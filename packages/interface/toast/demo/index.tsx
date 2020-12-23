/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Toast from 'universal-toast';

const Index = () => {
  return (
    <View>
      <View onClick={() => Toast.show('默认提示')}>
        <Text>点击弹出普通弹窗</Text>
      </View>
      <View onClick={() => Toast.show({type: 'success', message: 'success提示'})}>
        <Text>点击弹出success弹窗</Text>
      </View>
      <View onClick={() => Toast.show({type: 'fail', message: 'fail提示'})}>
        <Text>点击弹出fail弹窗</Text>
      </View>
      <View onClick={() => Toast.show({type: 'none', message: '5s提示', duration: 5000})}>
        <Text>点击弹出5s弹窗</Text>
      </View>
      <View onClick={() => Toast.hide()}>
        <Text>点击关闭弹窗</Text>
      </View>
    </View>
  );
};
export default Index;