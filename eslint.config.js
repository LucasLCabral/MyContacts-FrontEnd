import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React (18)
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desativa a regra para React 18
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
];
