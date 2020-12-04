const {
    sledPasswordChecker,
    tobogganPasswordChecker
} = require("../day2");
const part1TestInput = [
    ["1-3 a", "abcde"],
    ["1-3 b", "cdefg"],
    ["2-9 c", "ccccccccc"],
];


describe('Day 2', () => {
    describe('Part 1', () => {
        it('should return the correct number of correct passwords, given their rules', () => {
            expect(sledPasswordChecker(part1TestInput)).toBe(2);
        });
    });

    describe('Part 2', () => {
        it('should return the correct number of correct passwords, given their rules', () => {
            expect(tobogganPasswordChecker(part1TestInput)).toBe(1);
        })
    })
});
