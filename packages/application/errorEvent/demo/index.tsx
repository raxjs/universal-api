import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import errorEvent from 'universal-error-event';
import {show} from 'universal-toast';

export default function() {
  const ref = useRef((res) => {
    show('捕获到一个错误');
  });
  return (
    <View>
      <Text>errorEvent</Text>
      <View onClick={() => {
        errorEvent.onError(ref.current);
      }}>监听错误</View>
      <View onClick={() => {
        throw new Error('我是一个错误');
      }}>触发错误</View>
      <View onClick={() => {
        errorEvent.offError(ref.current);
      }}>取消监听</View>
    </View>
  );
}
