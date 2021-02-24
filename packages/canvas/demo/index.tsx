import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import createCanvasContext from '@uni/canvas-context';

export default function() {
  useEffect(() => {
    const node = document.querySelector('#demo1');
    createCanvasContext({
      canvasId: 'canvas',
      context: node._internal
    }).then((canvasContext) => {
      canvasContext.fillStyle = 'red';
      canvasContext.fillRect(0, 0, 100, 100);
      // Only valid in miniapp
      canvasContext.draw();
    });
  }, []);
  return (
    <View>
      <canvas id="canvas" width="400" height="400" />
    </View>
  );
}