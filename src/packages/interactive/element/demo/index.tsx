import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import {getScrollOffset, getBoundingClientRect} from '@uni/element';

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
  demo1: {
    border: '1px solid #eee',
    padding: '20rpx',
    fontSize: '26rpx',
    textAlign: 'center',
    margin: '20rpx'
  },
  preview: {
    padding: '20rpx',
  }
};

const Index = () => {
  const [demoInfo, setDemoInfo] = useState({
    scrollTop: '',
    scrollLeft: '',
  });
  return (
    <View>
      <View id="demo1" style={styles.demo1}>
        <Text>我是demo1</Text>
      </View>
      <View style={styles.button} onClick={() => {
        const node = document.querySelector('#demo1');
        getScrollOffset('#demo1', node._internal).then((ret) => {
          const { scrollTop, scrollLeft } = ret[0];
          console.log(scrollTop, scrollLeft);
          setDemoInfo(state => ({
            ...state,
            scrollTop,
            scrollLeft,
          }));
        })
        ;
      }}>
        点击获取demo1的scrollTop和scrollLeft
      </View>
      <View style={styles.button} onClick={() => {
        const node = document.querySelector('#demo1');
        getBoundingClientRect('#demo1', node._internal).then((ret) => {
          console.log(ret[0]);
          setDemoInfo(state => ({
            ...state,
            ...ret[0]
          }));
        })
        ;
      }}>
        点击获取demo1的boundingClientRect
      </View>
      <View style={styles.preview}>
        <View style={styles.preview}>scrollTop: {demoInfo.scrollTop}</View>
        <View style={styles.preview}>scrollLeft: {demoInfo.scrollLeft}</View>
        <View style={styles.preview}>width: {demoInfo.width}</View>
        <View style={styles.preview}>height: {demoInfo.height}</View>
        <View style={styles.preview}>left: {demoInfo.left}</View>
        <View style={styles.preview}>right: {demoInfo.right}</View>
        <View style={styles.preview}>top: {demoInfo.top}</View>
        <View style={styles.preview}>bottom: {demoInfo.bottom}</View>
      </View>
    </View>
  );
};
export default Index;