import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import showModal from '@uni/show-modal';
import toast from '@uni/toast';

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
      showModal({content: '显示modal'}).then(res => {
        if (res.confirm) {
          toast.show('点击了确认');
        } else {
          toast.show('点击了取消');
        }
      });
    }}>
      showModal无title
    </View>
    <View style={styles.button} onClick={() => {
      showModal({title: '标题', content: '显示modal内容'}).then(res => {
        if (res.confirm) {
          toast.show('点击了确认');
        } else {
          toast.show('点击了取消');
        }
      });
    }}>
      showModal有title
    </View>
    <View style={styles.button} onClick={() => {
      showModal({title: '标题', showCancel: false, content: '显示modal内容', confirmText: '知道了'}).then(res => {
        if (res.confirm) {
          toast.show('点击了确认');
        } else {
          toast.show('点击了取消');
        }
      });
    }}>
      showModal无取消按钮
    </View>
    <View style={styles.button} onClick={() => {
      showModal({title: '标题', content: '显示modal内容', confirmText: '继续', cancelText: '返回'}).then(res => {
        if (res.confirm) {
          toast.show('点击了确认');
        } else {
          toast.show('点击了取消');
        }
      });
    }}>
      showModal自定义按钮文案
    </View>
    </View>
  );
}
