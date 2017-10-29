module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2017,
    "allowImportExportEverywhere": false,
    "codeFrame": false,
  },
  rules: {
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "strict": 0,
    "experimentalDecorators": 0,
    "no-console": 1,
  },
};
