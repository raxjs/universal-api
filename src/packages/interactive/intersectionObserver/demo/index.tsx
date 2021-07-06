import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import { isWeChatMiniProgram, isKuaiShouMiniProgram } from '@uni/env';
import createIntersectionObserver from '@uni/intersection-observer';
import { ks } from '@uni';

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
    const node = document.querySelector('.parent');
    const intersectionObserver = createIntersectionObserver(null, node._internal);
    // const intersectionObserver = ks.createIntersectionObserver(node._internal);
    // const intersectionObserver = createIntersectionObserver();
    // 由于rax运行时在微信存在shadow dom问题，所以采用深度选择器
    const clsPre = isWeChatMiniProgram || isKuaiShouMiniProgram ? '.parent >>> ' : '';
    intersectionObserver.relativeTo(clsPre + '.block').observe(clsPre + '.circle', res => {
      console.log(res);
      setAppear(res.intersectionRatio > 0);
    });
  }, []);


  return (
    <View className="parent">
      <ScrollView style={styles.block} className="block">
        <View style={styles.inner}>
          <View>向上滑动</View>
          <View style={styles.fill} />
          <View>{appear ? '小球出现' : '小球消失'}</View>
          <View style={styles.circle} className="circle" />
        </View>
      </ScrollView>
    </View>
  );
}
