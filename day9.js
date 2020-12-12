function xmasDecrypter(data, preambleLength = 25) {
    for (let i = preambleLength, l = data.length; i < l; i++) {
        const preambleSlice = data.slice(i - preambleLength, i);
        const valid = isValid(data[i], preambleSlice);
        if (valid !== true) // i.e., is a number
            return valid;
    }

    return true;
}

function isValid(number, dataSet) {
    // The number must equal the sum of any two
    // numbers in the data set.
    for (let i = 0, l = dataSet.length; i < l; i++) {
        const num1 = dataSet[i];
        for (let j = i + 1; j < l; j++) {
            const num2 = dataSet[j];

            if (number === num1 + num2)
                return true;
        }
    }

    return number;
}

function exploitFinder(data, preambleLength = 25) {
    const target = xmasDecrypter(data, preambleLength);
    const l = data.length;
    const sum = (a, b) => a + b;
    let sliceLength = 2;

    // Start with minimum slice length, and then iterate
    // through the data, summing up contiguous sections.
    // If no matches are found in the current slice length,
    // increment the slice length, and then try again.
    while (sliceLength < l) {
        for (let i = 0; i < l; i++) {
            const dataSlice = data.slice(i, i + sliceLength);
            const total = dataSlice.reduce(sum);
            if (total === target) {
                const sortedSlice = dataSlice.sort((a, b) => a - b);
                return sortedSlice[0] + sortedSlice[sliceLength - 1];
            }
        }
        sliceLength++;
    }
}

module.exports = { xmasDecrypter, exploitFinder };
