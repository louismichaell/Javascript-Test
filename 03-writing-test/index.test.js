import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum of 1 and 2 should be 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

test('sum of -1 and 1 should be 0', () => {
  assert.strictEqual(sum(-1, 1), 0);
});

test('sum of 0 and 0 should be 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});
