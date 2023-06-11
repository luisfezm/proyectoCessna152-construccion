module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "vue",
  ],
  rules: {
    "vue/script-indent": ["error", 2, { "baseIndent": 1 }],
    // Agrega tus reglas personalizadas aquí
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "indent": "off"
      }
    }
  ]
};
