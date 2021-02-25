import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import navigate from '@uni/navigate';

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
        navigate.push({url: '/pages/toast/index', isHash: true, refresh: true});
      }}>push</View>
      <View style={styles.button} onClick={() => {
        navigate.replace({url: '/pages/toast/index', isHash: true, refresh: true});
      }}>replace</View>
      <View style={styles.button} onClick={() => {
        navigate.reLaunch({url: '/pages/toast/index', isHash: true, refresh: true});
      }}>reLaunch</View>
      <View style={styles.button} onClick={() => {
        navigate.back();
      }}>back</View>
      <View style={styles.button} onClick={() => {
        navigate.go({step: -1});
      }}>go(-1)</View>
    </View>
  );
}
