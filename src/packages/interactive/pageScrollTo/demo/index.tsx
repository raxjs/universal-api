/* eslint-disable import/no-extraneous-dependencies */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import pageScrollTo from '@uni/page-scroll-to';

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
};

const Index = () => {
  const positions = [300, 600, 900, 1200, 1500, 1800, 2100];

  return (
    <View>
      <View style={{ position: 'relative' }}>
        {positions.map(item => (
          <View style={{ position: 'absolute', top: `${item}px`, fontSize: '13px', color: '#999' }}>{item}</View>
        ))}
      </View>

      <View style={{
        ...styles.button,
        position: 'absolute',
        top: '20px',
      }} onClick={async () => {
        await pageScrollTo({
          scrollTop: 900
        });
        console.log('滚动完成');
      }}>
        <Text>滚动到顶部 900px 位置</Text>
      </View>
      <View style={{
        ...styles.button,
        position: 'absolute',
        top: '80px',
      }} onClick={async () => {
        await pageScrollTo({
          selector: '.box'
        });
        console.log('滚动完成');
      }}>
        <Text>滚动到 .box 元素位置</Text>
      </View>
      <View style={{
        ...styles.button,
        position: 'absolute',
        top: '940px',
      }} onClick={async () => {
        await pageScrollTo({
          scrollTop: 300
        });
        console.log('滚动完成');
      }}>
        <Text>滚动到顶部 300px 位置</Text>
      </View>

      <View className="box" style={{
        position: 'absolute',
        top: '1240px',
        background: '#fff1ff',
        color: '#c021c1',
        padding: '10px 20px',
      }}>
        .box
      </View>
    </View>
  );
};

export default Index;
