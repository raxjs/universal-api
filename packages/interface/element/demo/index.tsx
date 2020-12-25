import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import {getScrollOffet, getBoundingClientRect} from 'universal-element';

const Index = () => {
  const [demoInfo, setDemoInfo] = useState({
    scrollTop: '',
    scrollLeft: '',
  });
  return (
    <View>
      <View id="demo1">
        <Text>我是demo1</Text>
      </View>
      <View onClick={() => getScrollOffet('#demo1').then((ret) => {
        const { scrollTop, scrollLeft } = ret[0];
        console.log(scrollTop, scrollLeft);
        setDemoInfo(state => ({
          ...state,
          scrollTop,
          scrollLeft,
        }));
      })}>
        <Text>点击获取demo1的scrollTop和scrollLeft</Text>
      </View>
      <View onClick={() => getBoundingClientRect('#demo1').then((ret) => {
        setDemoInfo(state => ({
          ...state,
          ...ret[0]
        }));
      })}>
        <Text>点击获取demo1的boundingClientRect</Text>
      </View>
      <View>
        <View>scrollTop: {demoInfo.scrollTop}</View>
        <View>scrollLeft: {demoInfo.scrollLeft}</View>
        <View>width: {demoInfo.width}</View>
        <View>height: {demoInfo.height}</View>
        <View>left: {demoInfo.left}</View>
        <View>right: {demoInfo.right}</View>
        <View>top: {demoInfo.top}</View>
        <View>bottom: {demoInfo.bottom}</View>
      </View>
    </View>
  );
};
export default Index;