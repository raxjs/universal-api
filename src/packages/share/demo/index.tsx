/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import { showShareMenu, hideShareMenu } from '@uni/share';

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
  bg: {
    background: '#333',
    color: '#fff',
    border: '1px solid #eee',
    margin: '10rpx'
  }
};
export default () => {

  const clickHandler = () => {
    showShareMenu();
  };
  const clickHandler1 = () => {
    hideShareMenu();
  };
  return (
    <View>
      <View style={styles.button} onClick={clickHandler}>打开分享面板</View>
      <View style={styles.button} onClick={clickHandler1}>关闭分享面板</View>
    </View>
  );
};
