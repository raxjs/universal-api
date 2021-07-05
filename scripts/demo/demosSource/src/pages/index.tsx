import {createElement} from 'rax';
import View from 'rax-view';
import appJson from '../../app.json';
import navitage from '@uni/navigate';

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
  },
  input: {
    border: '1px solid #eee',
    margin: '10rpx'
  }
}

const Index = ({history}) => {
  const clickHandler = (path) => {
    navitage.push({ url: path });
  }
  return (
    <View>
      {appJson.routes.filter(i => i.path != '/pages/Home/index').map(i => 
        <View key={i.path} style={styles.button} onClick={() => clickHandler(i.path)}>
          {i.window.title}
        </View>  
      )}
    </View>
  )
};

export default Index;