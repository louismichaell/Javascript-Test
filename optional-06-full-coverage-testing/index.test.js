import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('should return the sum of two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('should return 0 if one number is negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
});

test('should return 0 if both numbers are negative', () => {
  assert.strictEqual(sum(-1, -5), 0);
});

test('should return 0 if one or both arguments are not numbers', () => {
  assert.strictEqual(sum('a', 5), 0);
  assert.strictEqual(sum(5, 'b'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum({}, []), 0);
});

test('should return 0 if arguments are not provided', () => {
  assert.strictEqual(sum(), 0);
});
