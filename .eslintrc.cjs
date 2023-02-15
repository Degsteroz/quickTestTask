module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'jsx-a11y/click-events-have-key-events': [
      'off',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'never',
    ],
    'brace-style': [
      'error'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'no-trailing-spaces': [
      'error',
    ],
    //
    'react/no-did-update-set-state': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'consistent-return': 0,
    eqeqeq: 1,
    'prefer-destructuring': 1,
    'no-mixed-operators': 1,
    'max-len': ['warn', { code: 80, ignoreTemplateLiterals: true }],
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'no-return-assign': ['warn', 'except-parens'],
  },
};
