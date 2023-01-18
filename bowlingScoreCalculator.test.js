
const { describe, it, expect } = require('@jest/globals');
const { bowlingScoreCalculator } = require('./bowlingScoreCalculator');

describe('Bowling Score Calculator', () => {

	it('Should throw an error when no array is provided', () => {
		expect(() => {
			bowlingScoreCalculator('123');

		}).toThrow('unsupported type');



	});
	it('Should throw an error when the length of array is 0', () => {
		expect(() => {
			bowlingScoreCalculator([]);
		}).toThrow('Not enough frames');
	});

    
});

