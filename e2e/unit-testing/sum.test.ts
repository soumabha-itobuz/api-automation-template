import {describe, expect, test} from '@jest/globals';
import { sum } from '../lib/sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    console.log('sum(1, 2)', sum(1, 2));
    expect(sum(1, 2)).toBe(3);
  });
});

