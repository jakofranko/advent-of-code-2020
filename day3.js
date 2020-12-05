function countTrees(input, slopeX, slopeY) {
    // If the input runs out of space on the x-axis,
    // then repeat the pattern. When the input runs
    // out of space on the y-axis, finish calculation.

    // An array of rows (y), which contain map squares (x)
    const tree = '#';
    const map = parseInput(input);
    const height = map.length;
    const width = map[0].length;
    let trees = 0;

    for (let y = 0, x = 0; y < height; y += slopeY, x = (x + slopeX) % width) {
        const tile = map[y][x];
        if (tile == tree) trees++;
    }

    return trees;
}

function parseInput(input) {
    const rows = input.split("\n");
    return rows.map(row => row.split(''));
}

module.exports = countTrees;
