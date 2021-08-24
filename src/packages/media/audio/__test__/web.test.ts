import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('crateAudioContext', async () => {
  window.AudioContext = jest.fn().mockImplementation(() => {
    return {
      createBufferSource: () => {},
      createGain: () => {},
    };
  });

  const { createAudioContext } = require('../src/index');
  const res = createAudioContext();
  await sleep(300);
  expect(document.body).toMatchSnapshot();
});
