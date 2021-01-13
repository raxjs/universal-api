import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Accelerometer from 'universal-accelerometer';

export default function() {
  const [res, setRes] = useState({
    x: 0,
    y: 0,
    z: 0
  });
  useEffect(() => {
    Accelerometer.onChange(res => {
      setRes(res);
      console.log(res.x);
      console.log(res.y);
      console.log(res.z);
    });

    // Accelerometer.offChange();
  }, []);
  return (
    <View>
      <Text>加速晃动手机</Text>
      <View>x轴加速度: {res.x}</View>
      <View>y轴加速度: {res.y}</View>
      <View>z轴加速度: {res.z}</View>
    </View>
  );
}
