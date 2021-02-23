import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import getApp from '@uni/app';
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
  return (
    <View>
      <View style={styles.button} onClick={() => {
        getApp().globalData = 'I am global data';
      }}>设置全局属性</View>
      <View style={styles.button} onClick={() => {
        show(getApp().globalData);
      }}>获取全局属性</View>
    </View>
  );
}
