import { createElement, useState } from 'rax';
import View from 'rax-view';
import { vibrateShort, vibrateLong } from '@uni/vibrate';
import confirm from '@uni/confirm';

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
        vibrateLong().then(() => {
          confirm({content: '调用成功'});
        });
      }}>长的震动</View>
      <View style={styles.button} onClick={() => {
        vibrateShort().then(() => {
          confirm({content: '调用成功'});
        });
      }}>短的震动</View>
    </View>
  );
}
