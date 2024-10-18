// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'prettier',
    'universe/native',
    'universe/shared/typescript-analysis',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
