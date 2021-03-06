module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:vue/essential", "@vue/standard", "@vue/typescript", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", {
      "printWidth": 100,
      "useTabs": false,
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "jsxSingleQuote": true,
      "quoteProps": "as-needed",
      "trailingComma": "all",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "arrowParens": "avoid",
      "vueIndentScriptAndStyle": false,
      "endOfLine": "auto"
    }],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-inferrable-types": "off"
  }
}
