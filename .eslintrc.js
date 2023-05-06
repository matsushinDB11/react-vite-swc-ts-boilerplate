module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "standard-with-typescript",
    "prettier"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: ".",
    project: ["./tsconfig.json"],
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  rules: {
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
