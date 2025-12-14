export default {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "lit"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:lit/recommended"
  ],
  rules: {
    indent: ["error", 2],
    semi: ["error", "never"],
    "@typescript-eslint/semi": ["error", "never"],
    quotes: ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "never"],
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
  }
}