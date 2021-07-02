import { createNoop, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('accelerometer', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockOnAccelerometerChange = jest.fn();
  const mockOffAccelerometerChange = jest.fn();
  configAPI('onAccelerometerChange', mockOnAccelerometerChange);
  configAPI('offAccelerometerChange', mockOffAccelerometerChange);

  const { onChange, offChange } = require('../src/index');

  let cb = createNoop();
  onChange(cb);
  expect(mockOnAccelerometerChange.mock.calls).toEqual([[cb]]);

  cb = createNoop();
  offChange(cb);
  expect(mockOffAccelerometerChange.mock.calls).toEqual([[cb]]);
});
