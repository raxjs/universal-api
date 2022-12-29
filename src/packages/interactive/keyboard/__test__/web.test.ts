import { sleep, testWebAPI } from '@/utils/__test__/util';

testWebAPI('hideKeyboard', async (globals) => {
  const { hide } = require('../src/index');

  document.body.innerHTML = `
    <input
      id="input-10000"
      type="text"
    />
    <input
      id="input-20000"
      type="number"
    />
  `;

  const input10000 = document.querySelector('#input-10000') as HTMLInputElement;
  const input20000 = document.querySelector('#input-20000') as HTMLInputElement;

  input10000.focus();
  input20000.focus();

  await hide();
  await sleep(300);

  expect(document.activeElement).not.toBe(input10000);
  expect(document.activeElement).not.toBe(input20000);
});
