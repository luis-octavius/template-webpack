import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.js"],
    ignores: [".config.js", "webpack.config.js"],
    rules: {
      semi: "error"
    }
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  
];
