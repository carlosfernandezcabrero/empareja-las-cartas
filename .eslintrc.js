module.exports = {
  extends: ['next/core-web-vitals', './node_modules/ts-standard/eslintrc.json'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  settings: {
    next: {
      rootDir: './'
    }
  },
  rules: {
    'jsx-quotes': 'off',
    'space-before-function-paren': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/jsx-curly-newline': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off'
  }
}
