import { testPlatformAPI, noop } from '@utils/__test__/util';

testPlatformAPI('animation', ['wechat', 'alipay', 'bytedance'], (container, globals) => {
  const mockAnimationStep = jest.fn();
  const mockCreateAnimation = jest.fn(() => ({ step: mockAnimationStep, export: noop }));

  if (container === 'wechat') {
    globals.wx.createAnimation = mockCreateAnimation;
  } else if (container === 'alipay') {
    globals.my.createAnimation = mockCreateAnimation;
  } else if (container === 'bytedance') {
    globals.tt.createAnimation = mockCreateAnimation;
  }

  const { createAnimation, createTransition } = require('../src/index');

  // default args
  let animation = createAnimation();
  expect(mockCreateAnimation.mock.calls).toEqual([[
    {
      duration: 400,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0',
    },
  ]]);

  animation.step();
  expect(mockAnimationStep.mock.calls).toEqual([[
    {
      duration: 400,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0',
    },
  ]]);

  // custom args
  mockCreateAnimation.mockClear();
  mockAnimationStep.mockClear();
  animation = createAnimation({
    duration: 100,
    timingFunction: 'ease',
    delay: 200,
    transformOrigin: '0 0 0',
  });
  expect(mockCreateAnimation.mock.calls).toEqual([[
    {
      duration: 100,
      timingFunction: 'ease',
      delay: 200,
      transformOrigin: '0 0 0',
    },
  ]]);

  animation.step({
    duration: 300,
    timingFunction: 'ease-in-out',
    delay: 400,
    transformOrigin: '1 1 1',
  });
  expect(mockAnimationStep.mock.calls).toEqual([[
    {
      duration: 300,
      timingFunction: 'ease-in-out',
      delay: 400,
      transformOrigin: '1 1 1',
    },
  ]]);

  // createTransition
  mockCreateAnimation.mockClear();
  mockAnimationStep.mockClear();
  createTransition({
    from: {},
    to: {},
    options: {
      duration: 500,
      timingFunction: 'step-start',
      delay: 600,
      transformOrigin: '1 2 3',
    },
  });
  expect(mockAnimationStep.mock.calls).toEqual([
    [{
      duration: 16,
      timingFunction: 'step-start',
      transformOrigin: '1 2 3',
      delay: 0,
    }],
    [{
      duration: 500,
      timingFunction: 'step-start',
      delay: 600,
      transformOrigin: '1 2 3',
    }],
  ]);
});
