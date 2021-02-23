import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import getSystemInfoSync from '@uni/system-info';

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
  const [systemInfo, setSystemInfo] = useState({});

  return (
    <View>
      <View style={styles.button} onClick={() => {
        let res = getSystemInfoSync();
        setSystemInfo(res);
      }}>获取系统信息</View>
      {Object.keys(systemInfo).map((key, i) => <View key={i} style={styles.flex}>
        <View>{key}: </View>
        <View>{systemInfo[key]}</View>
      </View>
      )}
    </View>
  );
}
