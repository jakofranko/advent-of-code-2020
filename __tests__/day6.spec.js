const customsArithmicator = require('../day6');
const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;

describe('Day 6', () => {
    it('Part 1', () => {
        expect(customsArithmicator(testInput)).toBe(11);
    });

    it('Part 2', () => {
        expect(customsArithmicator(testInput, true)).toBe(6);
    });
});
