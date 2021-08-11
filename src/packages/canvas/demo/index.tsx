import { createElement, useEffect, useRef } from 'rax';
import View from 'rax-view';
import canvas from '@uni/canvas';

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
  const canvasContextRef = useRef(null);
  const queryNode = (color) => {
    const node = document.querySelector('#canvas');
      canvas.createContext({
        canvasId: 'canvas',
        context: node._internal
      }).then((canvasContext) => {
        canvasContextRef.current = canvasContext;
        canvasContext.fillStyle = color;
        canvasContext.fillRect(0, 0, 200, 200);
      });
  }
  const draw = () => {
    if (!canvasContextRef.current) {
      queryNode('red');
    } else {
      canvasContextRef.current.fillStyle = 'red';
      canvasContextRef.current.fillRect(0, 0, 200, 200);
    }
  }
  const draw2 = () => {
    if (!canvasContextRef.current) {
      queryNode('yellow');
    } else if (canvasContextRef.current) {
      canvasContextRef.current.fillStyle = 'yellow';
      canvasContextRef.current.fillRect(0, 0, 200, 200);
    }
  }
  return (
    <View>
      <canvas id="canvas" canvas-id="canvas" type="2d" width="400" height="400" />
      <View style={styles.button} onClick={draw}>
       点击生成200*200的矩形
      </View>
      <View style={styles.button} onClick={draw2}>
       点击生成黄色的矩形
      </View>
    </View>
  );
}
