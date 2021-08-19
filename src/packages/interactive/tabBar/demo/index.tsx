/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement, setState, useState, useEffect } from 'rax';
import {
  registerNativeEventListeners,
  addNativeEventListener,
  removeNativeEventListener,
  usePageShow,
} from 'rax-app';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import tabBar from '@uni/tab-bar';
import { isWeb } from '@uni/env';

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
  text: {
    marginTop: '100rpx',
    padding: '20rpx',
    fontSize: '26rpx',
    textAlign: 'center',
    color: 'green',
  },
  container: {
    marginTop: '100rpx',
  },
  input: {
    margin: '20rpx',
    borderBottom: 'solid #32a1ce',
    color: '#32a1ce'
  }
};
const Index = () => {
  // const [opts, setOpts] = useState({
  //   title: '标题',
  //   backgroundColor: '导航栏背景色',
  // });

  const handleShow = () => {
    tabBar.showTabBar();
  }
  const handleHide = () => {
    tabBar.hideTabBar();
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginTop: '20rpx'}}>
          <View style={styles.button} onClick={handleShow}>
            <Text>Show</Text>
          </View>
          <View style={styles.button} onClick={handleHide}>
            <Text>Hide</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;