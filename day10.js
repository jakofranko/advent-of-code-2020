function joltDiffer(adapters) {
    const sorted = adapters
        .split("\n")
        .map(n => +n)
        .sort((a, b) => a - b);
    let currJolts = 0;
    return sorted.reduce((diffs, adapter) => {
        const diff = adapter - currJolts;
        currJolts = adapter;
        if (!diffs[diff]) diffs[diff] = 0;
        diffs[diff]++;
        return diffs;
    }, { 3: 1 }); // Start with a 3 diff to represent your device
}

module.exports = joltDiffer;
