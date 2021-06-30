import { createNoop, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('accelerometer', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockOnAccelerometerChange = jest.fn();
  const mockOffAccelerometerChange = jest.fn();

  if (container === 'wechat') {
    globals.wx.onAccelerometerChange = mockOnAccelerometerChange;
    globals.wx.offAccelerometerChange = mockOffAccelerometerChange;
  } else if (container === 'dingtalk') {
    globals.dd.onAccelerometerChange = mockOnAccelerometerChange;
    globals.dd.offAccelerometerChange = mockOffAccelerometerChange;
  } else if (container === 'ali') {
    globals.my.onAccelerometerChange = mockOnAccelerometerChange;
    globals.my.offAccelerometerChange = mockOffAccelerometerChange;
  } else if (container === 'bytedance') {
    globals.tt.onAccelerometerChange = mockOnAccelerometerChange;
    globals.tt.offAccelerometerChange = mockOffAccelerometerChange;
  }

  const { onChange, offChange } = require('../src/index');

  let cb = createNoop();
  onChange(cb);
  expect(mockOnAccelerometerChange.mock.calls).toEqual([[cb]]);

  cb = createNoop();
  offChange(cb);
  expect(mockOffAccelerometerChange.mock.calls).toEqual([[cb]]);
});
