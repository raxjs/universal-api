/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement, setState, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import pullDownRefresh from '@uni/pull-down-refresh';
import { isWeb } from '@uni/env';

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
  text: {
    marginTop: '100rpx',
    padding: '20rpx',
    fontSize: '26rpx',
    textAlign: 'center',
    color: 'green',
  }
};
const Index = () => {
  const [pullRefresh, setPullRefresh] = useState(false);
  
  useEffect(() => {

    //运行以下命令打开web端h5界面的手动刷新
    pullDownRefresh.onPullDownRefresh({pullRefresh: true, triggerDistance: 100, eventCallback: () => {
      console.log("pulldownrefresh触发了");
      setPullRefresh(!pullRefresh);
    }});
  }, []);

  const handleClickStart = () => {
    pullDownRefresh.startPullDownRefresh();
    !pullRefresh && setPullRefresh(true);
  };
  const handleClickStop = () => {
    pullDownRefresh.stopPullDownRefresh();
    pullRefresh && setPullRefresh(false);
  };
  return (
    <View>
      {/* <Text>下滑页面即可刷新</Text> */}
      <View style={styles.button} onClick={handleClickStart}>
        <Text>开始刷新</Text>
      </View>
      <View style={styles.button} onClick={handleClickStop}>
        <Text>停止刷新</Text>
      </View>
      <View style={styles.text}>
        <Text>{pullRefresh ? "刷新了" : ""}</Text>
      </View>
    </View>
  );
};
export default Index;