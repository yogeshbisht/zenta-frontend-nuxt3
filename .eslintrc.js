module.exports = {
  root: true,

  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
  },
};
