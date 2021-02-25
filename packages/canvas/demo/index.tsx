import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import canvas from '@uni/canvas';

export default function() {
  useEffect(() => {
    const node = document.querySelector('#canvas');
    canvas.createContext({
      canvasId: 'canvas',
      context: node._internal
    }).then((canvasContext) => {
      canvasContext.fillStyle = 'red';
      canvasContext.fillRect(0, 0, 100, 100);
    });
  }, []);
  return (
    <View>
      <canvas id="canvas" type="2d" width="400" height="400" />
    </View>
  );
}
