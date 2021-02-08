import { normalizeHeaders } from '../common';

describe('Test normalizeHeaders', () => {
  test('Accept、Content-Type', () => {
    expect(normalizeHeaders({
      'accept': 'a',
      'content-type': 'b',
    })).toEqual({
      'Accept': 'a',
      'Content-Type': 'b',
    });
  });
});