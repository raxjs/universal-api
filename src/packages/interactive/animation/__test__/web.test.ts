import { sleep, testWebAPI } from '@/utils/__test__/util';
import { Animation } from '../src/types';

testWebAPI('animation', async () => {
  /* eslint-disable newline-per-chained-call */

  const { createAnimation, createTransition } = require('../src/index.ts');

  let dom = document.createElement('div');
  const animation: Animation = createAnimation({ duration: 50 });
  animation.top(1).opacity(0.5).backgroundColor('#aaa').width(100).height(200).left(300).right(400).top(500).bottom(600).step();
  animation.rotate(1).rotateX(2).rotateY(3).rotateZ(4).rotate3d(1, 2, 3, 4).step();
  animation.scale(1, 2).scaleX(2).scaleY(3).scaleZ(4).scale3d(1, 2, 3).step();
  animation.translate(1, 2).translateX(2).translateY(3).translateZ(4).translate3d(1, 2, 3).step();
  animation.skew(1, 2).skewX(2).skewY(3).step();
  animation.matrix(1, 2, 3, 4, 5, 6).matrix3d(1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4).step();

  animation.export(dom);
  // for six step animation, per step duration is 100ms
  await sleep(4);
  expect(dom).toMatchSnapshot();
  await sleep(50);
  expect(dom).toMatchSnapshot();
  await sleep(50);
  expect(dom).toMatchSnapshot();
  await sleep(50);
  expect(dom).toMatchSnapshot();
  await sleep(50);
  expect(dom).toMatchSnapshot();
  await sleep(50);
  expect(dom).toMatchSnapshot();

  // update the animation while the animation is running
  dom = document.createElement('div');
  dom.style.transitionTimingFunction = 'ease';

  createAnimation({ duration: 50 }).scale(2, 4).top(100).step().export(dom);
  await sleep(4);
  expect(dom).toMatchSnapshot();

  createAnimation({ duration: 50 }).skew(3, 6).bottom(200).step().export(dom);
  await sleep(4);
  expect(dom).toMatchSnapshot();

  // for restore style
  await sleep(50);
  expect(dom).toMatchSnapshot();


  // createTransition
  dom = document.createElement('div');
  createTransition({
    from: {
      transform: 'rotate(10deg) translateX(10px)',
      opacity: 0.5,
    },
    to: {
      transform: 'rotate(20deg) translateX(20px)',
      opacity: 1,
    },
    options: {
      duration: 50,
    },
  }).export(dom);
  await sleep(4);
  expect(dom).toMatchSnapshot();
  await sleep(16);
  expect(dom).toMatchSnapshot();

  /* eslint-enable newline-per-chained-call */
});
