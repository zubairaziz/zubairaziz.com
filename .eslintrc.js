module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: ['**/*.{js,ts}'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
