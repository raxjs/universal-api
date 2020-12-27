import {createElement} from 'rax';
import View from 'rax-view';
import appJson from '../../app.json';

const styles = {
  flex: {
    flexDirection: 'row'
  },
  button: {
    margin: '10rpx',
    padding: '20rpx',
    background: 'rgb(38, 115, 67)',
    color: '#fff',
    fontSize: '26rpx'
  },
  input: {
    border: '1px solid #eee',
    margin: '10rpx'
  }
}

const Index = ({history}) => {
  const clickHandler = (path) => {
    history.push(path);
  }
  return (
    <View>
      {appJson.routes.map(i => 
        <View key={i.path} style={styles.button} onClick={() => clickHandler(i.path)}>
          {i.window.title}
        </View>  
      )}
    </View>
  )
};

export default Index;