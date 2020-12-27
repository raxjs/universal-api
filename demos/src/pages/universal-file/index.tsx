/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import {download, getInfo, save, openDocument} from 'universal-file';
import alert from 'universal-alert';
import chooseImage from 'universal-choose-image';

const Index = () => {
  const [img2, setImg2] = useState('');
  const getFileInfoHandler = () => {
    download({
      url: 'https://s3.pstatp.com/toutiao/resource/developer/static/img/main-logo.8e3a839.png',
      success(res) {
        // 获取下载的文件信息
        getInfo({apFilePath: res.apFilePath});
      },
      fail(res) {
        console.log('下载失败', res.errMsg);
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
            alert('文件保存成功：' + res.savedFilePath);
          }});
        }
      },
    });
  };
  const downloadHandler = () => {
    download({
      // 仅为示例 url，并非真实地址
      url: 'https://gw.alicdn.com/tfs/TB18EuDjGNj0u4jSZFyXXXgMVXa-225-225.jpg',
      success: function(res) {
        const filePath = res.tempFilePath;
        setImg2(filePath);
        alert('下载成功', res.tempFilePath);
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
      <View onClick={getFileInfoHandler}>
        <Text>点击获取文件信息</Text>
      </View>
      <View onClick={saveHandler}>
        <Text>点击保存临时文件</Text>
      </View>
      <View onClick={openDocumentHandler}>
        <Text>点击打开pdf文件</Text>
      </View>
      <Image x-if={img2} source={{uri: img2}} />
      <View onClick={downloadHandler}>
        <Text>点击下载图片</Text>
      </View>
    </View>
  );
};
export default Index;