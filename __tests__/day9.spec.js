const test1Input = [];
for (let i = 0; i < 25; i++, test1Input.push(i));
const test2Input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`.split("\n").map(n => +n);
const { xmasDecrypter, exploitFinder } = require('../day9');

describe('Day 9', () => {
    it('Part 1', () => {
        expect(xmasDecrypter(test1Input.concat([26]), 25)).toBe(true);
        expect(xmasDecrypter(test1Input.concat([49]), 25)).toBe(true);
        expect(xmasDecrypter(test1Input.concat([100]), 25)).toBe(100);
        expect(xmasDecrypter(test1Input.concat([50]), 25)).toBe(50);
        expect(xmasDecrypter(test2Input, 5)).toBe(127);
    });

    it('Part 2', () => {
        expect(exploitFinder(test2Input, 5)).toBe(62);
    });
});
