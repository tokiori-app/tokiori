module.exports = {
  extends: ["expo", "prettier", "universe/native"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "error",
    "no-console": "warn",
    "no-alert": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
