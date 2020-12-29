import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import createIntersectionObserver from 'universal-intersection-observer';

const styles = {
  block: {
    width: '100%',
    height: '400rpx',
    border: '1px solid #eee'
  },
  inner: {
    height: '1000rpx',
    position: 'relative',
    alignItems: 'center'
  },
  fill: {
    height: '450rpx'
  },
  circle: {
    background: 'red',
    borderRadius: '50%',
    width: '100rpx',
    height: '100rpx',
    marginTop: '100rpx'
  }
};

export default function() {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    const node = document.querySelector('#circle');
    const intersectionObserver = createIntersectionObserver({}, node._internal);

    intersectionObserver.relativeTo('#block').observe('#circle', res => {
      console.log(res);
      setAppear(res.intersectionRatio > 0);
    });
  }, []);


  return (
    <View>
      <ScrollView style={styles.block} id="block">
        <View style={styles.inner}>
          <View>向上滑动</View>
          <View style={styles.fill} />
          <View>{appear ? '小球出现' : '小球消失'}</View>
          <View style={styles.circle} id="circle" />
        </View>
      </ScrollView>
    </View>
  );
}
