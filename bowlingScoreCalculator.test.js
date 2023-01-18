const {describe, test, it} = require('@jest/globals');

describe('Bowling Score Calculator', () => {
    it('Should give error when no array is provided'.  () => {

        test('no array', () => {
            bowlingScoreCalculator('123');
        }).toThrow('unsupported type');
    });

});