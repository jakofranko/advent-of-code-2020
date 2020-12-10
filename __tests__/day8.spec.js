const infiniteLoop = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
const gameboy = require('../day8');

describe('Day 8', () => {
    it('Part 1', () => {
        expect(gameboy(infiniteLoop)).toBe(5);
    });

    it('Part 2', () => {
        expect(gameboy(infiniteLoop, true)).toBe(8);
    });
});
