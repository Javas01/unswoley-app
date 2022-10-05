module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  // 'globals': {
  // 	//TODO: remove these and require import
  // 	'RootParamList': 'writable',
  // },
  rules: {
    indent: ['error', 2],
    //'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'prettier/prettier': 'error',
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
