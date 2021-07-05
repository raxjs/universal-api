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
import navigationBar from '@uni/navigation-bar';

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
  const [opts, setOpts] = useState({
    title: '标题',
    backgroundColor: '导航栏背景色',
  });

  const handleSubmit = () => {
    console.log('title, color: ', opts);
    navigationBar.setNavigationBarTitle({ title: opts.title });
    navigationBar.setNavigationBarColor({ backgroundColor: opts.backgroundColor });
    // navigationBar.setNavigationBarColor({ backgroundColor: opts.backgroundColor, frontColor: '#000000' });
  }
  const handleReset = () => setOpts({ title: '标题', backgroundColor: '导航栏背景色'});

  return (
    <View style={styles.container}>
      <View onSubmit={handleSubmit}>
        <View>
          <TextInput style={styles.input} value={opts.title} type="text" placeholder="标题" name="title" onInput={({value}) => {
            setOpts({ ...opts, title: value });
          }}></TextInput>
          <TextInput style={styles.input} value={opts.backgroundColor} type="text" placeholder="导航栏背景色" name="backgroundColor" onInput={({value}) => {
            setOpts({ ...opts, backgroundColor: value });
          }}></TextInput>
        </View>
        <View style={{ marginTop: '20rpx'}}>
          <View style={styles.button} onClick={handleSubmit}>
            <Text>Submit</Text>
          </View>
          <View style={styles.button} onClick={handleReset}>
            <Text>Reset</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;