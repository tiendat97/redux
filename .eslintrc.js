module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      spread: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2018 ,
    "sourceType": "module"
  },
  plugins: ["react", "import"],
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  },
  parserOptions: {
    sourceType: "module"    
  }
};
