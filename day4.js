const required = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
];
const rules = {
    'byr': (value) => {
        const num = Number(value);
        return /\d{4}/.test(value) && num >= 1920 && num <= 2002;
    },
    'iyr': (value) => {
        const num = Number(value);
        return /\d{4}/.test(value) && num >= 2010 && num <= 2020;
    },
    'eyr': (value) => {
        const num = Number(value);
        return /\d{4}/.test(value) && num >= 2020 && num <= 2030;
    },
    'hgt': (value) => {
        const doesMatch = value.match(/(\d+)(in|cm)/);
        if (doesMatch) {
            // eslint-disable-next-line no-unused-vars
            const [_, num, units] = doesMatch;
            if (units == "cm") {
                return +num >= 150 && +num <=193;
            } else if (units == "in") {
                return +num >=59 && +num <=76;
            }
        } else {
            return false;
        }

    },
    'hcl': (value) => {
        return /^#[0-9a-f]{6}$/.test(value);
    },
    'ecl': (value) => {
        return /(amb|blu|brn|gry|grn|hzl|oth)/.test(value);
    },
    'pid': (value) => {
        return /^\d{9}$/.test(value);
    },
    'cid': (value) => {
        return value;
    }
}
function passportValidator(passportData, validateValues = false) {
    const passports = passportData.split(/\n{2,}/g);
    let valid = 0;
    
    passports.forEach(passport => {
        const data = passport.split(/\s+/);
        const fields = data.map(datum => datum.split(":")[0]);

        let isValid = hasRequiredFields(fields);
        if (isValid && validateValues) {
            isValid = isValid && validateFieldValues(data);
        }

        if (isValid) valid++;
    });

    return valid;
}

function hasRequiredFields(fields) {
    return required.every(req => fields.indexOf(req) > -1);
}

function validateFieldValues(fieldsAndValues) {
    return fieldsAndValues.every(fieldAndValue => {
        const [field, value] = fieldAndValue.split(":");
        return rules[field](value);
    });
}

module.exports = {
    passportValidator,
    rules,
    validateFieldValues
};
