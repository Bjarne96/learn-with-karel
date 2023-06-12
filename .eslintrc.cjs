// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
    overrides: [
        {
        extends: [
            // "plugin:@typescript-eslint/recommended-requiring-type-checking",
        ],
        files: ["*.ts", "*.tsx"],
        parserOptions: {
            project: path.join(__dirname, "tsconfig.json"),
        },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        ecmaFeatures: {jsx: true}
    },
    root: true,
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    extends: [
        "eslint:recommended",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    settings: {
        "react" : {
            "version": "detect"
        }
    },
    rules: {
        "@typescript-eslint/await-thenable" :"error",// removes unnecessary awaits
        "@typescript-eslint/prefer-as-const" : "error", // replaces "string" as "string" to "string" as const
        "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
        },
        ],
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "react/prop-types": "off"  
    },
};

module.exports = config;
