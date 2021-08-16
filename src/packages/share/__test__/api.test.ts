import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('share', ['wechat', 'ali', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockShowShareMenu = jest.fn(createPromisifyImpl());
  const mockHideShareMenu = jest.fn(createPromisifyImpl());


  if (container === 'baidu') {
    configAPI('openShare', mockShowShareMenu);
  } else {
    configAPI('showShareMenu', mockShowShareMenu);
    configAPI('hideShareMenu', mockHideShareMenu);
  }

  const { showShareMenu, hideShareMenu } = require('../src/index').default;


  if (container === 'wechat') {
    await showShareMenu({ menus: ['shareAppMessage', 'shareTimeline'] });
    expect(mockShowShareMenu.mock.calls.length).toBe(1);
    expect(mockShowShareMenu.mock.calls[0][0].menus).toStrictEqual(['shareAppMessage', 'shareTimeline']);
  } else if (container === 'baidu') {
    await showShareMenu({ title: 'test' });
    expect(mockShowShareMenu.mock.calls.length).toBe(1);
    expect(mockShowShareMenu.mock.calls[0][0].title).toBe('test');
  } else {
    await showShareMenu({ success: () => {} });
    expect(mockShowShareMenu.mock.calls.length).toBe(1);
  }
  if (container !== 'baidu') {
    await hideShareMenu({ success: () => {} });
    expect(mockHideShareMenu.mock.calls.length).toBe(1);
  }
});
