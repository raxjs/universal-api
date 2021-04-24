// @ts-nocheck
import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { getLocation, openLocation, chooseLocation } from '@uni/location';

const styles = {
  flex: {
    flexDirection: 'row',
  },
  button: {
    margin: '10rpx',
    padding: '20rpx',
    background: '#17BD88',
    color: '#fff',
    fontSize: '26rpx',
    textAlign: 'center',
  },
  input: {
    border: '1px solid #eee',
    margin: '10rpx',
  },
};

export default function () {
  const [location, setLocation] = useState({});
  const [chooseRes, setChooseRes] = useState('');

  return (
    <View>
      <View
        style={styles.button}
        onClick={() => {
          getLocation({
            _ext: {
              aliMiniApp: {
                type: 1
              },
              wechatMiniProgram: {
                altitude: true
              }
            }
          }).then((res) => {
            setLocation(res);
          });
        }}
      >获取当前定位
      </View>
      {Object.keys(location).map((key) => (<View key={key} style={styles.flex}>
        <View>{key}: </View>
        <View>{location[key]}</View>
                                           </View>))}
      <View
        style={styles.button}
        onClick={() => {
          openLocation({
            longitude: '120.126293',
            latitude: '30.274653',
            name: '黄龙万科中心',
            address: '学院路77号' });
        }}
      >打开内置地图
      </View>
      <View
        style={styles.button}
        onClick={() => {
          chooseLocation({
            longitude: 120.126293,
            latitude: 30.274653,
          }).then(res => {
            console.log(res);
            setChooseRes(JSON.stringify(res));
          });
        }}
      >选择位置
      </View>
      <View>选择位置数据：{chooseRes}</View>
    </View>
  );
}
