import { createElement, useRef, useState } from 'rax';
import View from 'rax-view';
import { createAnimation, createTransition } from '@uni/animation';

const styles = {
  box: {
    position: 'absolute',
    top: '100rpx',
    left: '100rpx',
    width: '300rpx',
    height: '180rpx',
    background: '#f7c8c8'
  },
  buttonWrapper: {
    position: 'absolute',
    top: '400rpx',
    left: '16rpx',
    right: '16rpx',
    zIndex: '2',
    fontSize: '26rpx',
    color: '#333'
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    margin: '2rpx',
    padding: '12rpx 16px',
    background: '#17BD88',
    color: '#fff',
    fontSize: '26rpx',
    textAlign: 'center'
  },
  desc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20rpx'
  }
};

const random = (min, max, digit = 0) => {
  const r = Math.random() * (max - min) + min;
  return Number(r.toFixed(digit));
};

const Index = () => {
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState([]);
  const [animationData, setAnimationData] = useState({});
  const boxRef = useRef<any>();
  const ani = useRef<any>();
  if (!ani.current) {
    ani.current = createAnimation();
  }

  const put = (name) => {
    let current = selected.pop();
    if(!current) current = [];
    current.push(name);
    selected.push(current);
    setSelected(
      selected.slice()
    );
  };

  const reset = () => {
    ani.current = createAnimation();
    setVisible(false);
    setSelected([]);
    setAnimationData({});
    setTimeout(() => {
      setVisible(true);
    }, 0);
  };

  const play = () => {
    let inst = ani.current;
    selected.forEach(step => {
      if (step.length === 0) return;
      step.forEach(item => {
        switch (item) {
          case '旋转':
            inst.rotate(random(-30, 30));
            break;
          case '缩放':
            inst.scale(random(0.5, 1.5, 2));
            break;
          case '平移':
            inst.translate(random(-50, 50), random(-50, 50));
            break;
          case '倾斜':
            inst.skew(random(-30, 30), random(-30, 30));
            break;
          case '3D变换':
            inst.rotate3d(random(-2, 2, 2), random(-2, 2, 2), random(-2, 2, 2), random(-90, 90));
            inst.translate3d(random(-50, 50), random(-50, 50), random(-50, 50));
            break;
          case '改变大小':
            inst.width(random(100, 300)).height(random(50, 140));
            break;
          case '改变背景色':
            inst.backgroundColor(`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
            break;
          case '改变透明度':
            inst.opacity(random(0.2, 1, 2));
            break;
          case '延迟500ms':
            inst.step().step({ duration: 0, delay: 500 });
            break;
          default:
        }
      });
      inst.step();
    });
    const data = inst.export(boxRef.current);
    console.log('animationData', data);
    setAnimationData(data);
  };

  const addGroup = () => {
    const newSelected = selected.slice();
    newSelected.push([]);
    setSelected(newSelected);
  };

  const copyGroup = () => {
    const newSelected = selected.slice();
    const target = newSelected[newSelected.length - 1] || []
    newSelected.push(target.slice());
    setSelected(newSelected);
  };

  const playTransition = () => {
    const transition = createTransition({
      from: {
        transform: 'translate(10px, 10px) scale(1)'
      },
      to: {
        transform: 'translate(100px, 50px) scale(1.4, 1.2)'
      }
    });
    const data = transition.export(boxRef.current);
    console.log('transitionData', data);
    setAnimationData(data);
  }

  return (
    <View>
      {visible && <View style={styles.box} ref={boxRef} animation={animationData} />}

      <View style={styles.buttonWrapper}>
        <View style={styles.buttonGroup}>
          <View style={styles.button} onClick={() => put('旋转')}>旋转</View>
          <View style={styles.button} onClick={() => put('缩放')}>缩放</View>
          <View style={styles.button} onClick={() => put('平移')}>平移</View>
          <View style={styles.button} onClick={() => put('倾斜')}>倾斜</View>
          <View style={styles.button} onClick={() => put('3D变换')}>3D变换</View>
          <View style={styles.button} onClick={() => put('改变大小')}>改变大小</View>
          <View style={styles.button} onClick={() => put('改变背景色')}>改变背景色</View>
          <View style={styles.button} onClick={() => put('改变透明度')}>改变透明度</View>
          <View style={styles.button} onClick={() => put('延迟500ms')}>延迟500ms</View>
        </View>
        <View style={styles.desc}>
          已添加的动画效果：
          <View style={{ ...styles.button, padding: '4rpx', background: '#35b0ce' }} onClick={addGroup}>添加动画组</View>
          <View style={{ ...styles.button, padding: '4rpx', background: '#35b0ce' }} onClick={copyGroup}>拷贝当前动画组</View>
        </View>
        <View style={{ color: '#17BD88', margin: '20rpx 0' }}>
          {selected.map((item, index) => (
            <View>{index + 1}: {item.join(', ')}</View>
          ))}
        </View>
        <View style={{ ...styles.button, marginTop: '30rpx' }} onClick={play}>播放动画</View>
        <View style={{ ...styles.button, marginTop: '10rpx' }} onClick={reset}>重置</View>
        <View style={{ ...styles.button, marginTop: '30rpx' }} onClick={playTransition}>createTransition 演示（平移+缩放）</View>
      </View>

    </View>
  );
};
export default Index;
