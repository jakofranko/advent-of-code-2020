function expenseReporter(input, multiplier = 2) {
    switch(multiplier) {
        case 2:
            return find2(input);
        case 3:
            return find3(input);
    }

    throw Error('Oh noes!!! We couldn\'t fix your expense report!!!');
}

function find2(input) {
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
}

function find3(input) {
    const tried = {};
    let numA, numB, numC;

    for(let i = 0, l = input.length; i < l; i++) {
        const num1 = input[i];
        if (!tried[num1]) tried[num1] = {};

        for(let j = i + 1; j < l; j++) {
            const num2 = input[j];
            if (!tried[num1][num2]) tried[num1][num2] = {};

            for(let k = j + 1; k < l; k++) {
                const num3 = input[k];
                if (tried[num1][num2][num3]) continue;
                if (num1 + num2 + num3 === 2020) {
                    numA = num1;
                    numB = num2;
                    numC = num3;
                    break;
                } else {
                    tried[num1][num2][num3] = true;
                }
            }
        }

        if (numA != undefined && numB != undefined) {
            return numA * numB * numC;
        }
    }
}

module.exports = expenseReporter;
