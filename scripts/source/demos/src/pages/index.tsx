import {createElement} from 'rax';
import View from 'rax-view';
import appJson from '../../app.json';

const Index = ({history}) => {
  const clickHandler = (path) => {
    history.push(path);
  }
  return (
    <View>
      {appJson.routes.map(i => 
        <View style={{padding: '18rpx 0', textAlign: 'center', borderBottom: '1rpx solid #eee'}} onClick={() => clickHandler(i.path)}>
          {i.window.title}
        </View>  
      )}
    </View>
  )
};

export default Index;