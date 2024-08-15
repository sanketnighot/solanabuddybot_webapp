import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import eslint from "@eslint/js"
import eslintPluginPrettier from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default [
  { files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "eslint.config.mjs",
      "tailwind.config.js",
    ],
  },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: eslintPluginPrettier,
    },
  },
  {
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
  eslint.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]
