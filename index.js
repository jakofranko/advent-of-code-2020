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
const { part1Input: day3Part1Input } = require('./assets/day3.input');

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
