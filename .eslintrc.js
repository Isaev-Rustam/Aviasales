module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: ['node_modules', 'dist', 'build'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'plugin:react-redux/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-redux', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-redux/prefer-separate-component-file': 0,
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react/state-in-constructor': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': 'error',
    'linebreak-style': [0, 'unix'],
    quotes: ['error', 'single'],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    version: 'detect',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
