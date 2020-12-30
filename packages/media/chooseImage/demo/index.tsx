import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import chooseImage from 'universal-choose-image';

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
  const [tempFilePaths, setTempFilePaths] = useState([]);

  return (
    <View>
    <View style={styles.button} onClick={() => {
      chooseImage({
        count: 1,
        sourceType: ['album', 'camera']
      }).then(res => {
        console.log(res);
        setTempFilePaths(res.tempFilePaths)
      });
    }}>
      选择图片
    </View>
    {tempFilePaths.map(uri => 
      <View key={uri}>
        <View>{uri}</View>
        <Image style={{width: '100%', height: '400rpx'}} source={{uri}}></Image>
      </View>
    )}
    </View>
  );
}
