/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import request from '@uni/request';

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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const clickHandler = () => {
    setLoading(true);
    request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        test: '1'
      },
      timeout: 5000,
      success: (data) => {
        setLoading(false);
        console.log('data', data);
        setData({data, url: 'https://httpbin.org/post'});
      },
      fail: (error) => {
        setLoading(false);
        setError(error);
      }
      // dataType: 'text' as any
    });
  };
  const clickHandler1 = () => {
    setLoading(true);
    request({
      url: 'http://suggest.taobao.com/sug',
      method: 'JSONP',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        code: 'utf-8',
        q: '卫衣'
      },
      jsonpCallback: 'cb',
      jsonpCallbackProp: 'callback',
      timeout: 5000,
      success: (data) => {
        setLoading(false);
        console.log('data', data);
        setData({...data, url: 'http://suggest.taobao.com/sug'});
      },
      fail: (error) => {
        setLoading(false);
        setError(error);
      }
      // dataType: 'text' as any
    });
  };
  return (
    <View>
      <View style={styles.button} onClick={clickHandler}>发送请求</View>
      <View style={styles.button} onClick={clickHandler1}>发送JSONP请求</View>
      {loading ? <View style={styles.bg}>loading</View> : null}
      {data ? <View style={styles.bg}>
        <p><text>{`url: ${JSON.stringify(data.url)}`}</text></p>
        <p><text>{`data: ${JSON.stringify(data.data)}`}</text></p>
        <p><text>{`headers: ${JSON.stringify(data.headers)}`}</text></p>
        <p><text>{`status: ${JSON.stringify(data.status)}`}</text></p>
      </View> : null}
      {error ? <View style={styles.bg}>{JSON.stringify(error)}</View> : null}
    </View>
  );
};
