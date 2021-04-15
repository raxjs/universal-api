/* eslint-disable import/no-extraneous-dependencies */
import { createElement, useState, useEffect, useRef, findDOMNode } from 'rax';
import View from 'rax-view';
import animate from '@uni/animation';
import {isMiniApp} from '@uni/env';

export default () => {
  const [animationInfo1, setAnimationInfo1] = useState({});
  const [animationInfo2, setAnimationInfo2] = useState({});
  const block1 = useRef();
  const block2 = useRef();

  useEffect(() => {
    const animationResult = animate(
      {
        props: [
          {
            element: isMiniApp ? 'view1' : findDOMNode(block1.current),
            property: 'transform.translateX',
            easing: 'easeOutSine',
            duration: 200,
            start: 0,
            end: 200,
            delay: 100,
          },
          {
            element: isMiniApp ? 'view2' : findDOMNode(block2.current),
            property: 'opacity',
            easing: 'easeOutSine',
            duration: 200,
            end: 0.2,
            delay: 100,
          },
        ],
      },
      () => {
        console.log('timing end');
      },
    ).export();

    if (isMiniApp) {
      setAnimationInfo1(animationResult.view1);
      setAnimationInfo2(animationResult.view2);
    }
  }, []);

  return (
    <>
      <View
        ref={block1}
        animation={animationInfo1}
        style={{ backgroundColor: 'red', height: '100rpx', width: '100rpx' }}
      />
      <View
        ref={block2}
        animation={animationInfo2}
        style={{ backgroundColor: 'yellow', height: '100rpx', width: '100rpx' }}
      />
    </>
  );
};
