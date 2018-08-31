module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.test.js', 'test/**/*.js', '__mocks__/*.js'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['^Test'],
          },
        ],
      },
    },
  ],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react',
  ],
  plugins: ['compat'],
  rules: {
    'max-len': ['error', { code: 120, comments: 120 }],
    'compat/compat': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/__mocks__/**/*', '**/__tests__/**/*'] }],
    'no-use-before-define': ['error', { functions: false }],
    'react/jsx-filename-extension': false,
  },
};
