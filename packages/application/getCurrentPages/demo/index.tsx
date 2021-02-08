import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import getCurrentPages from '@uni/getcurrentpages';

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
  const [data, setData] = useState({
    firstPage: {},
    currentPage: {}
  });
  return (
    <View>
      <View style={styles.button} onClick={() => {
        let pageInfo = getCurrentPages();
        setData({
          firstPage: {
            viewId: pageInfo[0].$viewId,
          },
          currentPage: {
            viewId: pageInfo[pageInfo.length - 1].$viewId,
          }
        });
      }}>获取页面堆栈信息</View>
      <View>当前页面id是：{data.currentPage.viewId}</View>
    </View>
  );
}
