import { createElement, useState } from 'rax';
import View from 'rax-view';
import TextInput from 'rax-textinput';
import image from '@uni/image';
import confirm from '@uni/confirm';
import showActionSheet from '@uni/action-sheet';
import Image from 'rax-image';

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
};

export default function() {
  const [count, setCount] = useState(null);
  const [quality, setQuality] = useState(null);
  const [tempFilePaths, setTempFilePaths] = useState([]);

  return (
    <View>
      <TextInput style={styles.input} value={count} placeholder="输入最大可选图片数" type="number" onInput={({value}) => {
        setCount(Math.min(9, Math.max(1, +value)));
      }} />
      <TextInput style={styles.input} value={quality} placeholder="输入压缩质量0~3" type="number" onInput={({value}) => {
        setQuality(+value);
      }} />
      <View style={styles.button} onClick={() => {
        image.chooseImage({
          count: count || 1,
          sourceType: ['album', 'camera']
        }).then(res => {
          console.log(res);
          setTempFilePaths(res.tempFilePaths);
        });
      }}>
      选择图片
      </View>

      {!!tempFilePaths.length && <View>点击图片触发操作</View>}
      {tempFilePaths.map((uri, index) =>
        <View key={uri}>
          <View>{uri}</View>
          <Image style={{width: '100%', height: '400rpx'}} source={{uri}} onClick={() => {
            showActionSheet({
              itemList: ['压缩图片', '获取图片信息', '点击预览图片', '保存图片到相册']
            }).then(res => {
              if (res.tapIndex === 0) {
                image.compressImage({
                  src: uri,
                  quality: quality || 4
                }).then(res => {
                  console.log(res);
                  confirm({content: '压缩地址' + res.tempFilePath});
                }).catch(err => console.log(err));
              } else if (res.tapIndex === 1) {
                image.getImageInfo({src: uri}).then(res => {
                  console.log(res);
                  confirm({content: '图片信息，宽度：' + res.width + '；高度：' + res.height + '；本地路径：' + res.path});
                });
              } else if (res.tapIndex === 2) {
                image.previewImage({
                  urls: tempFilePaths,
                  current: index
                });
              } else if (res.tapIndex === 3) {
                image.saveImage({
                  url: uri
                });
              }
            });
          }} />
        </View>
      )}
    </View>
  );
}
