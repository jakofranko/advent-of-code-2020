const countTrees = require('../day3');
const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

describe('Day 3', () => {
    it('Part 1', () => {
        expect(countTrees(input, 3, 1)).toBe(7);
    });
});
