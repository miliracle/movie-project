module.exports = {
  root: true,
  ignorePatterns: ['node_modules/', 'build/', 'dist/'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json', './apps/movie-app/tsconfig.json', './packages/movie-sdk/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};