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
    subscribeMessage({
      tmplIds: [''],
    }).then((res?) => {
      console.log('success');
    });
  };
  return (
    <View>
      <View style={styles.button} onClick={clickHandler}>点开订阅面板</View>
    </View>
  );
};
