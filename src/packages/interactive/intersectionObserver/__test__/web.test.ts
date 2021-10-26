import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('intersectionObserver', async (globals) => {
  const mockDisconnect = jest.fn();
  const mockObserve = jest.fn();
  const mockIntersectionObserve = {
    disconnect: mockDisconnect,
    observe: mockObserve,
    takeRecords: jest.fn(),
    unobserve: jest.fn(),
  };
  globals.IntersectionObserver = jest.fn().mockImplementation(() => mockIntersectionObserve);
  // Set up our document body
  document.body.innerHTML =
  '<div id="parent">' +
  '  <div id="box" />' +
  '  <div id="fill" />' +
  '  <div id="circle" />' +
  '</div>';

  const { default: createIntersectionObserver } = require('../src/index');
  let intersectionObserver = createIntersectionObserver({
    thresholds: [1],
    selectAll: false,
  });

  let intersectionRes;

  intersectionObserver.relativeTo('#box').observe('#circle', (res) => {
    // console.log(res);
    intersectionRes = res || intersectionRes;
  });

  expect(intersectionObserver.observers).toEqual([mockIntersectionObserve]);

  intersectionObserver.disconnect();
  expect(intersectionObserver.observers).toEqual([]);

  intersectionObserver.relativeToViewport().observe('#circle', (res) => {
    // console.log(res);
    intersectionRes = res || intersectionRes;
  });

  expect(intersectionObserver.observers).toEqual([mockIntersectionObserve]);

  intersectionObserver.disconnect();
  expect(intersectionObserver.observers).toEqual([]);


  // selectAll = true
  intersectionObserver = createIntersectionObserver({
    thresholds: [1],
    selectAll: true,
  });

  intersectionObserver.relativeTo('#box').observe('#circle', (res) => {
    // console.log(res);
    intersectionRes = res || intersectionRes;
  });

  expect(intersectionObserver.observers).toEqual([mockIntersectionObserve]);

  intersectionObserver.disconnect();
  expect(intersectionObserver.observers).toEqual([]);

  intersectionObserver.relativeToViewport().observe('#circle', (res) => {
    // console.log(res);
    intersectionRes = res || intersectionRes;
  });

  expect(intersectionObserver.observers).toEqual([mockIntersectionObserve]);

  intersectionObserver.disconnect();
  expect(intersectionObserver.observers).toEqual([]);
});
