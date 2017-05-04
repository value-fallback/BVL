const assert = require('assert');
const bvl = require('../');

describe('BVL', () => {
	it('should return `value` when `value` is Boolean.', () => {
		assert.strictEqual(bvl(true, 0), true);
		assert.strictEqual(bvl(false, 0), false);
	});
	it('should return `fallbackValue` when `value` is not Boolean.', () => {
		assert.strictEqual(bvl(0, false), false);
		assert.strictEqual(bvl(null, true), true);
		assert.strictEqual(bvl([1, 2, 3], 'x'), 'x');
		assert.strictEqual(bvl({ a: 0, b: 1, c: 2}, 100), 100);
	});
});
