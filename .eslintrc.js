module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['compat'],
  rules: {
    'max-len': ['error', { code: 120, comments: 120 }],
    'compat/compat': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/__mocks__/**/*', '**/__tests__/**/*'] }],
    'no-use-before-define': ['error', { functions: false }],
    'react/jsx-filename-extension': false,
  },
};
