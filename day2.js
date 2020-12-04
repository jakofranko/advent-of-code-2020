function sledPasswordChecker(rulesAndPasswords) {
    let numCorrect = 0;

    rulesAndPasswords.forEach(ruleAndPassword => {
        const [rule, pass] = ruleAndPassword;
        const [min, max, character] = ruleParser(rule);
        let count = 0;
        [...pass].forEach(char => {
            if (char == character) count++;
        })

        if (count >= min && count <= max) numCorrect++;
    });

    return numCorrect;
}

function tobogganPasswordChecker(rulesAndPasswords) {
    let numCorrect = 0;

    rulesAndPasswords.forEach(ruleAndPassword => {
        const [rule, pass] = ruleAndPassword;
        const [first, second, character] = ruleParser(rule);
        const firstCharacter = pass.charAt(first - 1);
        const secondCharacter = pass.charAt(second - 1);

        if (firstCharacter == character && secondCharacter != character)
            numCorrect++;
        else if (firstCharacter != character && secondCharacter == character)
            numCorrect++;
    });

    return numCorrect;
}

function ruleParser(rule) {
    // Expect a format like "x-y z" where x and y
    // are numbers expressing a range, and z is
    // a lowercase character of which a number
    // within the range is expected.
    const [range, character] = rule.split(' ');
    const [min, max] = range.split('-');

    return [min, max, character];
}

module.exports = {
    sledPasswordChecker,
    tobogganPasswordChecker
};
