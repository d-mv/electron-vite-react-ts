module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended-legacy',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'plugin:regexp/recommended',
    // 'prettier',
    // 'prettier/recommended',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    '@getify/proper-arrows',
    '@typescript-eslint',
    'async-await',
    'eslint-comments',
    'import',
    'jest',
    'prettier',
    'react',
    'promise',
    'jsdoc',
    'regexp',
    'testing-library',
    'html',
    '@stylistic'
  ],
  rules: {
    'import/no-unresolved': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jsdoc/require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    complexity: ['error', 10],

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 3
      }
    ],
    '@typescript-eslint/no-redeclare': 'off',
    '@getify/proper-arrows/params': [
      'error',
      {
        unused: 'none',
        trivial: false,
        count: 15,
        length: 0,
        allowed: ['key']
      }
    ],
    'no-useless-catch': 'error',
    'no-self-compare': 'error',
    'no-useless-return': 'error',
    'no-const-assign': 'error',
    'no-useless-constructor': 'error',
    'no-param-reassign': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/keyword-spacing': 'error',
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    // radix: 'error',
    'no-var': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    '@stylistic/semi': ['off', null],
    'async-await/space-after-async': 2,
    'async-await/space-after-await': 2,
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/lines-around-comment': [0],
    '@stylistic/lines-between-class-members': ['error', 'always'],
    'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
    'max-nested-callbacks': ['error', 15],
    'max-params': ['error', 4],
    '@stylistic/newline-per-chained-call': ['off'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@stylistic/no-multi-spaces': ['error'],
    '@stylistic/no-multiple-empty-lines': ['error'],
    '@stylistic/func-call-spacing': ['error'],
    '@stylistic/no-whitespace-before-property': ['error'],
    'prettier/prettier': 'error',
    '@stylistic/space-before-blocks': ['error', 'always'],
    '@stylistic/spaced-comment': ['error', 'always', { markers: ['/'] }],
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'const', next: '*' },
      { blankLine: 'always', prev: '*', next: 'const' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'for', next: '*' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: 'switch', next: '*' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: 'try', next: '*' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' }
    ],
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true
      }
    ]
  }
}
