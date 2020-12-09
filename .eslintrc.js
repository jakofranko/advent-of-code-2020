module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "globals": {
        "describe": "readonly",
        "expect": "readonly",
        "it": "readonly"
    },
    "rules": {
        "no-unused-vars": "off"
    }
};
