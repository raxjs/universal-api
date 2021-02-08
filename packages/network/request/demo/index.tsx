/* eslint-disable import/no-extraneous-dependencies */
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
      timeout: 5000
      // dataType: 'text' as any
    }).then((data) => {
      setLoading(false);
      console.log('data', data);
      setData(data.data);
    }).catch((error) => {
      setLoading(false);
      setError(error);
    });
  };
  return (
    <View>
      <View style={styles.button} onClick={clickHandler}>发送请求</View>
      {loading ? <View style={styles.bg}>loading</View> : null}
      {data ? <View style={styles.bg}>
        <p><text>{`data: ${JSON.stringify(data.data)}`}</text></p>
        <p><text>{`url: ${JSON.stringify(data.url)}`}</text></p>
        <p><text>{`headers: ${JSON.stringify(data.headers)}`}</text></p>
      </View> : null}
      {error ? <View style={styles.bg}>{JSON.stringify(error)}</View> : null}
    </View>
  );
};
