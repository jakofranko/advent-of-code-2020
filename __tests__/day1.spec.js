const expenseReporter = require('../day1');
const part1TestInput = [
    1721,
    979,
    366,
    299,
    675,
    1456
];

describe('day 1', () => {
    describe('part 1', () => {
        it('should take an array of numbers, and find which two numbers sum 2020, and then multiply those numbers together', () => {
            expect(expenseReporter(part1TestInput)).toBe(514579);
        });
    });

    describe('part 2', () => {
        it('should take an array of numbers, and find which three numbers sum 2020, and then multiply those numbers together', () => {
            expect(expenseReporter(part1TestInput, 3)).toBe(241861950);
        });
    });
});
