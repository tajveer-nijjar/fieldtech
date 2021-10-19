module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-var-requires":
      process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-unused-vars":
      process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any":
      process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-empty-function": "off"
  }
};
