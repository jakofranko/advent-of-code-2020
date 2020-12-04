// Day 1
const expenseReporter = require('./day1');
const { part1Input: day1Part1Input } = require('./assets/day1.input');

// Day 2
const {
    sledPasswordChecker,
    tobogganPasswordChecker
} = require('./day2');
const { part1Input: day2Part1Input } = require('./assets/day2.input');

console.log('Day 1, part 1 answer:', expenseReporter(day1Part1Input));
console.log('Day 1, part 2 answer:', expenseReporter(day1Part1Input, 3));
console.log('Day 2, part 1 answer:', sledPasswordChecker(day2Part1Input));
console.log('Day 2, part 2 answer:', tobogganPasswordChecker(day2Part1Input));
