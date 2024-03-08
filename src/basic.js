module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': 1,
    'max-len': ['error', {
      code: 150,
    }],
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'camelcase': 0,
    'prefer-destructuring': 0,
    'func-names': 0,
    'no-tabs': 0,
    'consistent-return': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'eqeqeq':['warn','smart']
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
