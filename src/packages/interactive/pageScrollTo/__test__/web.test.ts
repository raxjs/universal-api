import { testWebAPI } from '@/utils/__test__/util';

function arrayToBeCloseTo(array: number[], expected: number[], digits = 4) {
  array.forEach((item, index) => {
    expect(item).toBeCloseTo(expected[index], digits);
  });
}

testWebAPI('pageScrollTo', async (globals) => {
  /* eslint-disable require-atomic-updates */
  jest.useFakeTimers();

  let records: number[] = [];
  globals.requestAnimationFrame = (cb) => {
    jest.advanceTimersByTime(16);
    records.push(document.documentElement.scrollTop);
    cb();
  };

  const { default: pageScrollTo } = require('../src/index');

  await pageScrollTo({
    scrollTop: 200,
    duration: 100,
  });
  arrayToBeCloseTo(records, [0, 32, 64, 96, 128, 160, 192]);
  expect(document.documentElement.scrollTop).toBe(200);

  records = [];
  await pageScrollTo({
    scrollTop: 400,
    duration: 0,
  });
  arrayToBeCloseTo(records, []);
  expect(document.documentElement.scrollTop).toBe(400);

  records = [];
  await pageScrollTo({
    scrollTop: 400,
  });
  arrayToBeCloseTo(records, []);
  expect(document.documentElement.scrollTop).toBe(400);

  records = [];
  const div = document.createElement('div');
  div.className = 'abc';
  div.getBoundingClientRect = () => ({ top: 200 }) as any;
  document.body.appendChild(div);
  await pageScrollTo({
    selector: '.abc',
  });
  arrayToBeCloseTo(records, [
    400, 410.66666, 421.33333, 432, 442.66666, 453.33333,
    464, 474.66666, 485.33333, 496, 506.66666, 517.33333,
    528, 538.66666, 549.33333, 560, 570.66666, 581.33333,
    591.99999,
  ]);
  expect(document.documentElement.scrollTop).toBe(600);

  records = [];
  div.getBoundingClientRect = () => ({ top: -300 }) as any;
  await pageScrollTo({
    selector: '.abc',
    duration: 100,
  });
  arrayToBeCloseTo(records, [600, 552, 504, 456, 408, 360, 312]);
  expect(document.documentElement.scrollTop).toBe(300);

  jest.useRealTimers();
  /* eslint-enable require-atomic-updates */
});
