function gameboy(code, repair = false) {
    const instructions = parseCode(code);
    const historyMatcher = /(\d+)\s(nop|acc|jmp)\s([+-]\d+)/;
    let currInstructions = instructions.slice();
    let accumulator = 0;
    let pointer = 0;
    let history = [];
    let repairCandidates;
    let repairing = false;
    let its = 0;

    while (currInstructions[pointer]) {
        const instruction = currInstructions[pointer];
        const historyEntry = `${pointer} ${instruction}`;
        const [op, val] = instruction.split(" ");
        const historyIndex = history.indexOf(historyEntry)

        if (historyIndex > -1 && !repair) {
            return accumulator;
        } if (historyIndex > -1 && repair) {
            if (repairing && !repairCandidates.length) {
                throw Error('already tried repair');
            } else if (!repairing) {
                // Establish repair candidates
                repairCandidates = history.filter(h => h.match(/\d+\s(nop|jmp)/));
                repairing = true;
            }

            // Need to repair the next candidate by creating
            // a new set of instructions with the one change made
            const fixInstruction = repairCandidates.pop();
            const [_, oldPointer, oldInst, oldVal] = fixInstruction.match(historyMatcher);
            let newInst;
            if (oldInst == 'jmp') {
                newInst = 'nop';
            } else if (oldInst == 'nop') {
                newInst = 'jmp';
            }

            // We're only changing one instruction, so start
            // with the original instructions, then change
            currInstructions = instructions.slice();
            currInstructions[+oldPointer] = `${newInst} ${oldVal}`;

            // Start over
            history = [];
            accumulator = 0;
            pointer = 0;
            continue;
        } else {
            history.push(historyEntry);
        }

        switch(op) {
            case "nop":
                pointer++;
                break;
            case "acc":
                accumulator += Number(val);
                pointer++
                break;
            case "jmp":
                pointer += Number(val);
                break;
            default:
                throw Error(`Invalid instruction ${op}`);
        }
    }

    return accumulator;
}

function parseCode(code) {
    return code.split("\n");
}

module.exports = gameboy;
