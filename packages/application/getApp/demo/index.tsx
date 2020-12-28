import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import getApp from 'universal-getapp';
import {show} from 'universal-toast';

export default function() {
  return (
    <View>
      <Text>errorEvent</Text>
      <View onClick={() => {
        getApp().globalData = 'I am global data';
      }}>设置全局属性</View>
      <View onClick={() => {
        show(getApp().globalData);
      }}>获取全局属性</View>
    </View>
  );
}
