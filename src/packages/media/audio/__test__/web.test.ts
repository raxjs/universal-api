import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('confirm', async () => {
  window.AudioContext = jest.fn().mockImplementation(() => {
    return {
      createBufferSource: () => {},
      createGain: () => {},
    };
  });

  const { createAudioContext } = require('../src/index');
  const res = createAudioContext();
  expect(document.body).toMatchSnapshot();

  await sleep(300); // await hide
});
