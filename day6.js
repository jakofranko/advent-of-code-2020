function customsArithmicator(customForms, onlyCountEveryone = false) {
    const formGroups = customForms.split(/\n{2}/g);
    return formGroups.reduce((sum, formGroup) => sum += aggregateGroupAnswers(formGroup, onlyCountEveryone), 0);
}

function aggregateGroupAnswers(formGroups, onlyCountEveryone = false) {
    const forms = formGroups.split("\n");
    const sum = (a, b) => a + b;
    // Build an object with a key that represents an answer letter,
    // and the value is the number of people in the group who answered
    // "yes", and then return the sum of those values.
    const answers = forms.reduce((answersSum, form) => {
        const formAnswers = form.split('');
        return formAnswers.reduce((groupAnswers, response) => {
            if (!groupAnswers[response])
                groupAnswers[response] = 1;
            else
                groupAnswers[response] += 1;

            return groupAnswers;
        }, answersSum);
    }, {});

    const answerValues = Object.values(answers);
    const answerKeys = Object.keys(answers);

    if (onlyCountEveryone) {
        return answerValues.filter(val => val === forms.length).length;
    } else {
        return answerKeys.length;
    }
}

module.exports = customsArithmicator;
