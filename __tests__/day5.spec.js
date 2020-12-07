const binaryPlaneSeatPartitioner = require('../day5');
const test1 = 'BFFFBBFRRR';
const test2 = 'FFFBBBFRRR';
const test3 = 'BBFFBBFRLL';

describe('Day 5', () => {
    it('Part 1', () => {
        expect(binaryPlaneSeatPartitioner(test1)).toStrictEqual([70, 7, 567]);
        expect(binaryPlaneSeatPartitioner(test2)).toStrictEqual([14, 7, 119]);
        expect(binaryPlaneSeatPartitioner(test3)).toStrictEqual([102, 4, 820]);
    });
});
