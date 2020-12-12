const test1Input = `16
10
15
5
1
11
7
19
6
12
4`;
const test2Input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;
const { joltDiffer, adapterPermutations } = require('../day10');

describe('Day 10', () => {
    it('Part 1', () => {
        expect(joltDiffer(test1Input)).toStrictEqual({
            1: 7,
            3: 5
        });
        expect(joltDiffer(test2Input)).toStrictEqual({
            1: 22,
            3: 10
        });
    });

    it('Part 2', () => {
        expect(adapterPermutations(test1Input)).toBe(8);
        expect(adapterPermutations(test2Input)).toBe(19208);
    })
});
