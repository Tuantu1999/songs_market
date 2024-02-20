/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    strictNullChecks: 'off',
    'no-case-declarations': 'off',
    'standard/no-callback-literal': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/ban-ts-ignore': ['off']
  },
}
