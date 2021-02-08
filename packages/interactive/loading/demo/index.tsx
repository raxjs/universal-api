/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import loading from '@uni/loading';

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
  const handleClick = () => {
    loading.showLoading({
      content: 'Loading, please wait'
    });
    setTimeout(() => loading.hideLoading(), 3000);
  };
  return (
    <View>
      <View style={styles.button} onClick={handleClick}>
        <Text>点击弹出loading</Text>
      </View>
    </View>
  );
};
export default Index;