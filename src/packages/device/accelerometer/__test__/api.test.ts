import { createNoop, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('accelerometer', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockOnAccelerometerChange = jest.fn();
  const mockOffAccelerometerChange = jest.fn();
  configAPI('onAccelerometerChange', mockOnAccelerometerChange);
  configAPI('offAccelerometerChange', mockOffAccelerometerChange);

  if (container === 'baidu') {
    globals.swan.stopAccelerometer = mockOffAccelerometerChange;
  }

  const { onChange, offChange } = require('../src/index');

  let cb = createNoop();
  onChange(cb);
  expect(mockOnAccelerometerChange.mock.calls).toEqual([[cb]]);

  cb = createNoop();
  offChange(cb);
  if (container === 'baidu') {
    expect(mockOffAccelerometerChange.mock.calls).toEqual([[{ complete: cb }]]);
  } else {
    expect(mockOffAccelerometerChange.mock.calls).toEqual([[cb]]);
  }
});
