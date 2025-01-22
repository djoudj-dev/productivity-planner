// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettier = require("eslint-plugin-prettier");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      "plugin:prettier/recommended",
    ],
    processor: angular.processInlineTemplates,
    parserOptions: {
      project: ["tsconfig.json"],
      createDefaultProgram: true,
    },
    globals: {
      sessionStorage: true,
      localStorage: true,
      navigator: true,
      window: true,
      setTimeout: true,
      clearTimeout: true,
      setInterval: true,
      clearInterval: true,
      btoa: true,
      atob: true,
      BigInt: true,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "linebreak-style": ["error", "unix"],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "prefer-template": "warn",
      "no-eval": "error",
      curly: "error",
    },
  },
  {
    files: ["**/*.spec.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:prettier/recommended",
    ],
    parserOptions: {
      project: ["tsconfig.spec.json"],
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {
      "@angular-eslint/template/attributes-order": [
        "error",
        {
          alphabetical: false,
          order: [
            "STRUCTURAL_DIRECTIVE",
            "TEMPLATE_REFERENCE",
            "ATTRIBUTE_BINDING",
            "INPUT_BINDING",
            "TWO_WAY_BINDING",
            "OUTPUT_BINDING",
          ],
        },
      ],
      "@angular-eslint/template/prefer-self-closing-tags": ["error"],
      "@angular-eslint/template/prefer-control-flow": ["error"],
    },
  },
  {
    files: ["**/*.html"],
    excludeFiles: ["*inline-template-*.component.html"],
    extends: ["plugin:prettier/recommended"],
    rules: {
      "prettier/prettier": ["error", { parser: "angular" }],
    },
  }
);
