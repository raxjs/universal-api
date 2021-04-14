import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import storage from '@uni/storage';
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
    fontSize: '26rpx'
  },
  input: {
    border: '1px solid #eee',
    margin: '10rpx'
  }
};

export default function() {
  const [key, setKey] = useState('');
  const [data, setData] = useState('');
  return (
    <View>
      <View style={styles.flex}>
        <View>key: </View>
        <TextInput style={styles.input} value={key} placeholder="输入存储键" onInput={({value}) => {
          setKey(value);
        }} />
      </View>
      <View style={styles.flex}>
        <View>data: </View>
        <TextInput style={styles.input} value={data} placeholder="输入存储值" onInput={({value}) => {
          setData(value);
        }} />
      </View>
      <View>异步存储</View>
      <View style={styles.flex}>
        <View style={styles.button} onClick={() => {
          storage.setStorage({key, data}).then(res => {
            confirm({title: '存储成功', showCancel: false, content: key + ':' + data});
          });
        }}>setStorage</View>
        <View style={styles.button} onClick={() => {
          storage.getStorage({key}).then(res => {
            confirm({title: '获取缓存', showCancel: false, content: key + ':' + res.data});
          });
          // storage.getStorage({key, fail: err => {console.log(err)}, success: (res) => {console.log(res, 'suc')}})
        }}>getStorage</View>
        <View style={styles.button} onClick={() => {
          storage.removeStorage({key}).then(res => {
            confirm({title: '删除缓存', showCancel: false, content: key});
          });
        }}>removeStorage</View>
      </View>
      <View>同步存储</View>
      <View style={styles.flex}>
        <View style={styles.button} onClick={() => {
          let res = storage.setStorageSync({key, data});
          confirm({title: '存储成功', showCancel: false, content: key + ':' + data});
        }}>setStorageSync</View>
        <View style={styles.button} onClick={() => {
          let res = storage.getStorageSync({key});
          confirm({title: '获取缓存', showCancel: false, content: key + ':' + res.data});
        }}>getStorageSync</View>
        <View style={styles.button} onClick={() => {
          let res = storage.removeStorageSync({key});
          confirm({title: '删除缓存', showCancel: false, content: key});
        }}>removeStorageSync</View>
      </View>
    </View>
  );
}
