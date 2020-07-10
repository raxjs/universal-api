import { createElement, useEffect, render } from 'rax';
import UniversalDriver from 'driver-universal';
import View from 'rax-view';
import { createContext } from '../src/index';

function App() {
  useEffect(() => {
    createContext('canvas', '2d').then((canvasContext) => {
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

render(<App />, document.body, { driver: UniversalDriver });
