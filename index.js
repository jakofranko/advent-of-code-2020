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

// Day 6
const customsArithmicator = require('./day6');
const { part1Input: day6Part1Input } = require('./assets/day6.input');

// Day 7
const { numBagsCanContain, numBagsIn } = require('./day7');
const { part1Input: day7Part1Input } = require('./assets/day7.input');

// Day 8
const gameboy = require('./day8');
const { part1Input: day8Part1Input } = require('./assets/day8.input');

// Day 9
const { xmasDecrypter, exploitFinder } = require('./day9');
const { part1Input: day9Part1Input } = require('./assets/day9.input');

// Day 10
const { joltDiffer, adapterPermutations } = require('./day10');
const { part1Input: day10Part1Input } = require('./assets/day10.input');


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
console.log('Day 6, part 1 answer:', customsArithmicator(day6Part1Input));
console.log('Day 6, part 2 answer:', customsArithmicator(day6Part1Input, true));
console.log('Day 7, part 1 answer:', numBagsCanContain(day7Part1Input, 'shiny gold'));
console.log('Day 7, part 1 answer:', numBagsIn(day7Part1Input, 'shiny gold'));
console.log('Day 8, part 1 answer:', gameboy(day8Part1Input));
console.log('Day 8, part 1 answer:', gameboy(day8Part1Input, true));
console.log('Day 9, part 1 answer:', xmasDecrypter(day9Part1Input.split("\n").map(n => +n)));
console.log('Day 9, part 2 answer:', exploitFinder(day9Part1Input.split("\n").map(n => +n)));

console.log('Day 10, part 1 answer:', (() => {
    const diffs = joltDiffer(day10Part1Input);
    return diffs[1] * diffs[3];
})());
console.log('Day 10, part 2 answer:', adapterPermutations(day10Part1Input));
