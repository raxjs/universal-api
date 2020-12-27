import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import createIntersectionObserver from 'universal-intersectionobserver';

const styles = {
  block: {
    width: '100%',
    height: '400rpx',
    border: '1px solid #eee'
  },
  inner: {
    height: '1000rpx',
    position: 'relative'
  },
  circle: {
    background: 'red',
    borderRadius: '50%',
    width: '100rpx',
    height: '100rpx',
    position: 'absolute',
    bottom: '100rpx',
    left: 0,
    right: 0,
    margin: 'auto'
  }
}

export default function() {

  const intersectionObserver = createIntersectionObserver();

  intersectionObserver.relativeTo('#block').observe('#circle', res => {
    console.log(res);
  });

  return (
    <View>
      <ScrollView style={styles.block} id="block">
        <View style={styles.inner}>
          <View style={styles.circle} id="circle"></View>
        </View>
      </ScrollView>
    </View>
  );
}
