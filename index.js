// Day 1
const expenseReporter = require('./day1');
const { part1Input: day1Part1Input } = require('./assets/day1.input');

// Day 2
const {
    sledPasswordChecker,
    tobogganPasswordChecker
} = require('./day2');
const { part1Input: day2Part1Input } = require('./assets/day2.input');

// Day 3
const countTrees = require('./day3');
const { part1Input: day3Part1Input } = require('./assets/day3.input')

// Day 4
const { passportValidator } = require('./day4');
const { part1Input: day4Part1Input } = require('./assets/day4.input')

// Day 5
const binaryPlaneSeatPartitioner = require('./day5');
const { part1Input: day5Part1Input } = require('./assets/day5.input');


console.log('Day 1, part 1 answer:', expenseReporter(day1Part1Input));
console.log('Day 1, part 2 answer:', expenseReporter(day1Part1Input, 3));
console.log('Day 2, part 1 answer:', sledPasswordChecker(day2Part1Input));
console.log('Day 2, part 2 answer:', tobogganPasswordChecker(day2Part1Input));
console.log('Day3, part 1 answer:', countTrees(day3Part1Input, 3, 1));
console.log('Day3, part 2 answer:',
    countTrees(day3Part1Input, 1, 1) *
    countTrees(day3Part1Input, 3, 1) *
    countTrees(day3Part1Input, 5, 1) *
    countTrees(day3Part1Input, 7, 1) *
    countTrees(day3Part1Input, 1, 2)
);
console.log('Day 4, part 1 answer:', passportValidator(day4Part1Input));
console.log('Day 4, part 2 answer:', passportValidator(day4Part1Input, true));
console.log('Day 5, part 1 answer:', day5Part1Input.reduce((biggestID, current) => {
    const passportID = binaryPlaneSeatPartitioner(current)[2];
    if (passportID >= biggestID) return passportID;
    else return biggestID;
}, 0));
console.log('Day 5, pargt 2 answer:', (() => {
    const ids = day5Part1Input
        .map(pass => binaryPlaneSeatPartitioner(pass)[2])
        .sort((curr, prev) => curr - prev);
    const start = ids[0];
    const end = ids[ids.length - 1];
    for (let i = start; i <= end; i++) {
        if (ids.indexOf(i) < 0) {
            return i;
        }
    }
})());
