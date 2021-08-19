/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import authorize from '@uni/authorize';
import { showToast, hideToast } from '@uni/toast';

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
    authorize({
      scope: 'scope.userLocation',
      success: () => {
        showToast('授权成功');
      },
      fail: () => {
        showToast('授权失败');
      },
    });
  };
  const clickHandler1 = () => {
    authorize({
      scope: 'scope.camera',
      success: () => {
        showToast('授权成功');
      },
      fail: () => {
        showToast('授权失败');
      },
    });
  };
  return (
    <View>
      <View style={styles.button} onClick={clickHandler}>获取地理位置授权</View>
      <View style={styles.button} onClick={clickHandler1}>获取摄像头授权</View>
    </View>
  );
};
