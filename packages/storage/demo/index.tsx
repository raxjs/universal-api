import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import storage from 'universal-storage'
import showModal from 'universal-show-modal';

const styles = {
  flex: {
    flexDirection: 'row'
  },
  button: {
    margin: '10rpx',
    padding: '20rpx',
    background: 'rgb(38, 115, 67)',
    color: '#fff',
    fontSize: '26rpx'
  },
  input: {
    border: '1px solid #eee',
    margin: '10rpx'
  }
}

export default function() {
  const [key, setKey] = useState('');
  const [data, setData] = useState('');
  return (
    <View>
      <View style={styles.flex}>
        <View>key: </View>
        <TextInput style={styles.input} value={key} placeholder="输入存储键" onInput={({value}) => {
          setKey(value);
        }}></TextInput>
      </View>
      <View style={styles.flex}>
        <View>data: </View>
        <TextInput style={styles.input} value={data} placeholder="输入存储值" onInput={({value}) => {
          setData(value);
        }}></TextInput>
      </View>
      <View>异步存储</View>
      <View style={styles.flex}>
        <View style={styles.button} onClick={() => {
          storage.setStorage({key, data}).then(res => {
            showModal({title: '存储成功', showCancel: false, content: key + ':' + data})
          });
        }}>setStorage</View>
        <View style={styles.button} onClick={() => {
          storage.getStorage({key}).then(res => {
            showModal({title: '获取缓存', showCancel: false, content: key + ':' + res.data})
          });
        }}>getStorage</View>
        <View style={styles.button} onClick={() => {
          storage.removeStorage({key}).then(res => {
            showModal({title: '删除缓存', showCancel: false, content: key})
          });
        }}>removeStorage</View>
      </View>
      <View>同步存储</View>
      <View style={styles.flex}>
        <View style={styles.button} onClick={() => {
          let res = storage.setStorageSync({key, data});
          showModal({title: '存储成功', showCancel: false, content: key + ':' + data})
        }}>setStorageSync</View>
        <View style={styles.button} onClick={() => {
          let res = storage.getStorageSync({key})
          showModal({title: '获取缓存', showCancel: false, content: key + ':' + res.data})
        }}>getStorageSync</View>
        <View style={styles.button} onClick={() => {
          let res = storage.removeStorageSync({key});
          showModal({title: '删除缓存', showCancel: false, content: key})
        }}>removeStorageSync</View>
      </View>
    </View>
  );
}
