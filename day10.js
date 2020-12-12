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

function adapterPermutations(adapters, maxJoltDifference = 3) {
    const sorted = adapters
        .split("\n")
        .map(n => +n)
        .sort((a, b) => a - b);

    // Add start and device joltages
    const maxNum = sorted.reduce((a, b) => Math.max(a, b), 0);
    sorted.push(maxNum + 3);
    sorted.unshift(0);

    const cache = {};
    function findPermutations(i) {
        if (i === sorted.length - 1) return 1;
        if (cache[i]) return cache[i];

        let permutations = 0;
        for (let j = 1; j <= maxJoltDifference; j++) {
            const neighbor = sorted[i + j];
            if (neighbor && neighbor - sorted[i] <= 3) {
                permutations += findPermutations(i + j);
            }
        }

        cache[i] = permutations;
        return permutations;
    }

    return findPermutations(0);
}

module.exports = { joltDiffer, adapterPermutations };
