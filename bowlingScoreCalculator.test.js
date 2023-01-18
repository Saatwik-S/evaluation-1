
const { describe, it, expect } = require('@jest/globals');
const { bowlingScoreCalculator, bestScoreCalculator } = require('./bowlingScoreCalculator');


describe('Bowling Score Calculator', () => {

	describe('Calculate Score of a single game', () => {
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
    
		it('Should return 300 when all the inputs are 10', () => {
			expect(bowlingScoreCalculator([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
    
		});
    
		it('Should return 16 when the array has 6,4,3 in the start and rest are 0', () => {
			expect((bowlingScoreCalculator([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))).toBe(16);
		});
		it('Should return 90 when all are 3,6....', () => {
			expect(bowlingScoreCalculator([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
		});
		it('Should return 30 when all elements except last three are 0', () => {
			expect(bowlingScoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
		});
		it('Should return 27 when all are 3,6....', () => {
			expect(bowlingScoreCalculator([3, 6, 3, 6, 3, 6])).toBe(27);
		});
	});

	describe('Calculate best score for multiple games', () => {
		it('Should return 90 when two arrays are there or (3,6)*3 and (3,6)*10', () => {
			expect(bestScoreCalculator([[3, 6, 3, 6, 3, 6],[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]])).toBe(90);
		});
	});


	

    
});

