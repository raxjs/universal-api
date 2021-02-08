import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import errorEvent from '@uni/error-event';
import {show} from '@uni/toast';

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
  const [a, setA] = useState(1);
  useEffect(() => {
    errorEvent.onError(ref.current);
    return () => {
      errorEvent.offError(ref.current);
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
        errorEvent.onError(ref.current);
      }}>监听错误</View>
      <View style={styles.button} onClick={showError}>触发错误</View>
      <View style={styles.button} onClick={() => {
        errorEvent.offError(ref.current);
      }}>取消监听</View>
    </View>
  );
}
