function numBagsCanContain(baggageRules, bagColor) {
    const rules = parseBaggageRules(baggageRules);
    const bagParents = findRecursiveParents(rules, bagColor);
    return new Set(bagParents).size;
}

function numBagsIn(baggageRules, bagColor) {
    const rules = parseBaggageRules(baggageRules);
    const numChildren = findRecursiveChildren(rules, bagColor);
    return numChildren;
}

function parseBaggageRules(baggageRules) {
    const rules = baggageRules.split("\n");
    const rulesHash = rules.reduce((hash, rule) => {
        const [p, c] = rule.split("contain").map(r => r.trim());
        const parent = p.replace(/\sbags/, "");
        const children = c.split(",").map(c => c.trim());

        if (!hash[parent]) hash[parent] = {};
        children.forEach(child => {
            if (child == "no other bags.") {
                return;
            }

            const [_, amount, color] = child.match(/^(\d+)(.*)\sbags?\.?$/);
            hash[parent][color.trim()] = amount;
        });

        return hash;
    }, {});

    return rulesHash;
}

// rules will be an object like:
// {
//    'red': {
//        'blue': 2,
//        'dotted black': 6
//    },
//    'blue': {
//        'gold': 5,
//        'emerald green': 2
//    },
//    ...
//  }
function findRecursiveParents(rules, bagColor, parentContainers = []) {
    const parentBags = Object.keys(rules);
    const containers = parentBags.filter(bag => {
        const canContain = Object.keys(rules[bag]);
        return canContain.indexOf(bagColor) > -1
    });

    if (containers.length < 1)
        return parentContainers.concat(containers);
    else {
        const containerCeption = containers.reduce((prev, additionalColor) => {
            const moreContainers = findRecursiveParents(rules, additionalColor, containers);
            return prev.concat(moreContainers);
        }, []);

        return parentContainers.concat(containerCeption);
    }
}

function findRecursiveChildren(rules, bagColor) {
    const children = rules[bagColor];
    let total = 0;

    if (children) {
        const childrenNames = Object.keys(children);
        const childrenAmounts = Object.values(children).map(n => +n);

        // This provides the number of immediate children
        total += childrenAmounts.reduce((a, b) => a + b, 0);

        // Next, go through the possible bags within each child,
        // and find the number of bags it should contain, and
        // multiply this by the amount of its parent that exists.
        const childrenTotals = childrenNames.reduce((currTotal, childName) => {
            const childTotal = findRecursiveChildren(rules, childName) * children[childName];
            return currTotal + childTotal;
        }, 0);

        return total + childrenTotals;
    } else {
        return 1;
    }
}

module.exports = { numBagsCanContain, numBagsIn };
