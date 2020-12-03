function expenseReporter(input) {
    const tried = {};
    let numA, numB;

    for(let i = 0, l = input.length; i < l; i++) {
        const num = input[i];
        if (!tried[num]) tried[num] = {};

        for(let j = i + 1; j < l; j++) {
            const currNum = input[j];
            if (tried[num][currNum]) continue;
            if (num + currNum === 2020) {
                numA = num;
                numB = currNum;
                break;
            } else {
                tried[num][currNum] = true;
            }
        }

        if (numA != undefined && numB != undefined) {
            return numA * numB;
        }
    }

    throw Error('Oh noes!!! We couldn\'t fix your expense report!!!');
}

module.exports = expenseReporter;
