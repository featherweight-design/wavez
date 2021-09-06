module.exports = {
  extends: '../eslintrc.js',
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: 'module',
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    // Enables airbnb eslint rules (https://www.npmjs.com/package/eslint-config-airbnb)
    'airbnb',
    // Uses the recommended rules from Jest
    // 'plugin:jest/recommended',
    // Uses the recommended rules from Cypress
    'plugin:cypress/recommended',
    // Uses the recommended rules from eslint
    'eslint:recommended',
    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', 'jest', 'cypress', 'graphql'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules
    // specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-floating-promises': 'off',
    // Turned off to allow for object exports in index with only one property
    'import/prefer-default-export': 'off',
    // Turned off due to conflict with the second rule below, which should be used with TS
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    // Turned off because annoying
    'react-hooks/rules-of-hooks': 'error',
    // No longer needed as of React v17
    'react/jsx-uses-react': 'off',
    // No longer needed as of React v17
    'react/react-in-jsx-scope': 'off',
    // Allows JSX to be used in .ts/.tsx files
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    // Allows omission of file extensions in .ts(x)/.js(x) files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // Turns off rule that conflicts with Prettier
    'comma-dangle': 'off',
    // Turns off rule that conflicts with Prettier
    'object-curly-newline': 'off',
    // Fixes an error when suggesting testing devDependencies should be dependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['.spec.ts'] }],
    // Adds graphql linting for GQL tag template literals based on schemas
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('../schema.json'),
      },
    ],
    // Requires that all GQL operations be names
    'graphql/named-operations': [
      'error',
      {
        schemaJson: require('../schema.json'),
      },
    ],
    // Can be enabled to lint required fields in a GQL schema
    // 'graphql/required-fields': [
    //   'error',
    //   {
    //     env: 'apollo',
    //     schemaJson: require('../schema.json'),
    //     requiredFields: ['uuid'],
    //   },
    // ],
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
    'import/resolver': {
      // This loads <rootdir>/tsconfig.json to eslint
      typescript: {},
    },
  },
  overrides: [
    {
      // Ignores prop-type errors with *.tsx files
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
