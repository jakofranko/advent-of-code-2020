function binaryPlaneSeatPartitioner(instructions) {
    const parsedInstructions = instructions.match(/^([FB]{7})([RL]{3})$/);
    if (parsedInstructions) {
        // eslint-disable-next-line no-unused-vars
        const [_, rowInstructions, columnInstructions] = parsedInstructions;
        const row = binaryPartitioner(rowInstructions.split(''), 128);
        const column = binaryPartitioner(columnInstructions.split(''), 8);

        return [row, column, row * 8 + column];
    }
}

function binaryPartitioner(instructions, bits, min, max) {
    if (min === undefined && max === undefined) {
        min = 0;
        max = bits - 1;
    }

    const nextInstruction = instructions.splice(0, 1);
    const diff = max - min;
    const halfDiff = diff / 2;
    let lowHalf, upperHalf;

    switch(bits) {
        case 8:
            lowHalf = "L";
            upperHalf = "R";
            break;
        case 128:
            lowHalf = "F";
            upperHalf = "B";
            break;
        default:
            throw Error(`Unrecognized bits mode ${bits}`);
    }

    if (diff == 1) {
        return nextInstruction == lowHalf ? min : max;
    } else if (nextInstruction == lowHalf) {
        return binaryPartitioner(instructions, bits, min, Math.floor(max - halfDiff));
    } else if (nextInstruction == upperHalf) {
        return binaryPartitioner(instructions, bits, Math.ceil(min + halfDiff), max);
    } else {
        console.error(instructions, bits, min, max);
    }
}

module.exports = binaryPlaneSeatPartitioner;
