// @ts-nocheck
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import alert from '@uni/alert';
import scan from '@uni/scan';

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
  return (
    <View
      style={styles.button}
      onClick={() => {
        scan({
          scanType: ['qrCode','barCode'],
        }).then((res) => {
          alert({title: `${res.result}`});
        });
      }}
    >
      扫码
    </View>
  );
}
