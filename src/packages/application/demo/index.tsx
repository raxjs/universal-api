// @ts-nocheck
import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { onError, offError, getApp, getCurrentPages } from '@uni/application';
import { show } from '@uni/toast';

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
  const ref = useRef((res) => {
    show('捕获到一个错误');
  });
  const [data, setData] = useState({
    firstPage: {},
    currentPage: {}
  });
  const [a, setA] = useState(1);
  useEffect(() => {
    onError(ref.current);
    return () => {
      offError(ref.current);
    };
  }, []);
  useEffect(() => {
    throw new Error('我是一个错误');
  }, [a]);
  const showError = () => {
    setA(a => a + 1);
  };
  return (
    <View>
      <View style={styles.button} onClick={() => {
        getApp().globalData = 'I am global data';
      }}>设置全局属性</View>
      <View style={styles.button} onClick={() => {
        show(getApp().globalData);
      }}>获取全局属性</View>
      <View style={styles.button} onClick={() => {
        onError(ref.current);
      }}>监听错误</View>
      <View style={styles.button} onClick={showError}>触发错误</View>
      <View style={styles.button} onClick={() => {
        offError(ref.current);
      }}>取消监听</View>
      <View>
        <View style={styles.button} onClick={() => {
          let pageInfo = getCurrentPages();
          setData({
            firstPage: {
              pageId: pageInfo[0].pageId,
            },
            currentPage: {
              pageId: pageInfo[pageInfo.length - 1].pageId,
            }
          });
        }}>获取页面堆栈信息</View>
        <View>当前页面id是：{data.currentPage.pageId}</View>
      </View>
    </View>
  );
}
