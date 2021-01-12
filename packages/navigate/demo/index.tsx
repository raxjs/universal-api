import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import navigate from 'universal-navigate';

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
        navigate.push({url: '/pages/universal-toast/index'});
      }}>push</View>
      <View style={styles.button} onClick={() => {
        navigate.replace({url: '/pages/universal-toast/index'});
      }}>replace</View>
      <View style={styles.button} onClick={() => {
        navigate.pop();
      }}>pop</View>
      <View style={styles.button} onClick={() => {
        navigate.go({step: -1});
      }}>go(-1)</View>
    </View>
  );
}