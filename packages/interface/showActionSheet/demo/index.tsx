import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import showActionSheet from 'universal-action-sheet';
import Toast from 'universal-toast';

const styles = {
  flex: {
    flexDirection: 'row'
  },
  button: {
    margin: '10rpx',
    padding: '20rpx',
    background: 'rgb(38, 115, 67)',
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
    <View style={styles.button} onClick={() => {
      showActionSheet({
        itemList: ['A', 'B', 'C']
      }).then(res => {
        Toast.show('选中项Index:' + res.tapIndex);
      });
    }}>
      showActionSheet
    </View>
  );
}
