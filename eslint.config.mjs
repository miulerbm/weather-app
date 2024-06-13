import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import reactNativeCommunityConfig from "@react-native-community/eslint-config";

export default [
  // General settings for JavaScript and TypeScript files
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json", // Ensure you have a tsconfig.json file in your project root
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: "eslint-plugin-react",
    },
    rules: {
      ...reactNativeCommunityConfig.rules,
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...fixupConfigRules(pluginReactConfig),
    },
  },
  // TypeScript-specific settings
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Add or override TypeScript-specific rules here
    },
  },
];
