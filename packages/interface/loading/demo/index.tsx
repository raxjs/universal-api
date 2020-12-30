import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import {showLoading, hideLoading} from 'universal-loading';

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
}

export default function() {
  return (
    <View>
      <View style={styles.button} onClick={() => {
        showLoading({
          content: '加载中，3s消失',
        }).then(() => {
          setTimeout(() => {
            hideLoading();
          }, 3000);
        });
      }}>showLoading</View>
    </View>
  );
}
