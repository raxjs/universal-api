/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import {download, getInfo, save, openDocument} from '@uni/file';
import alert from '@uni/alert';
import chooseImage from '@uni/choose-image';

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
const Index = () => {
  const [img2, setImg2] = useState('');
  const getFileInfoHandler = () => {
    download({
      url: 'https://gw.alicdn.com/tfs/TB18EuDjGNj0u4jSZFyXXXgMVXa-225-225.jpg',
      success(res) {
        // 获取下载的文件信息
        getInfo({filePath: res.tempFilePath, success: (res) => {
          alert({
            title: '提示',
            content: '下载文件的信息为' + JSON.stringify(res),
          });
        }});
      },
      fail(res) {
        console.log('下载失败' + res.errMsg);
      },
    });
  };
  const saveHandler = () => {
    chooseImage({
      success(res) {
        // 获取图片, chooseImage 获取的文件在临时文件目录内
        const tempFilePaths = res.tempFilePaths;
        if (tempFilePaths[0]) {
          // 保存到用户目录
          save({tempFilePath: tempFilePaths[0], success: (res) => {
            alert({
              title: '提示',
              content: '文件保存成功：' + res.savedFilePath,
            });
          }, fail: (e) => {
            alert({
              title: '提示',
              content: '文件保存失败：' + JSON.stringify(e),
            });
          }});
        }
      },
      fail: (e) => {
        alert({
          title: '提示',
          content: '文件保存失败：' + JSON.stringify(e),
        });
      }
    }).then(e => console.log(e)).catch(e => console.log(e));
  };
  const downloadHandler = () => {
    download({
      url: 'https://gw.alicdn.com/tfs/TB18EuDjGNj0u4jSZFyXXXgMVXa-225-225.jpg',
      success: function(res) {
        const filePath = res.tempFilePath;
        setImg2(filePath);
        alert({
          title: '提示',
          content: '下载成功' + res.tempFilePath,
        });
      },
    });
  };
  const openDocumentHandler = () => {
    download({
      // 仅为示例 url，并非真实地址
      url: 'https://github.com/DOBEEE/assets/raw/master/%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E7%A4%BA%E4%BE%8B%E6%96%87%E4%BB%B6.pdf',
      success: function(res) {
        const filePath = res.tempFilePath;
        openDocument({
          filePath: filePath,
          success: function() {
            console.log('打开文档成功');
          },
        });
      },
    });
  };
  return (
    <View>
      <View style={styles.button} onClick={getFileInfoHandler}>
        点击获取文件信息
      </View>
      <View style={styles.button} onClick={saveHandler}>
        点击保存临时文件
      </View>
      <View style={styles.button} onClick={openDocumentHandler}>
       点击打开pdf文件
      </View>
      <View x-if={img2} style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image resizeMode="cover"
          mode="aspectFill" source={{uri: img2}} />
      </View>
      <View style={styles.button} onClick={downloadHandler}>
       点击下载图片
      </View>
    </View>
  );
};
export default Index;