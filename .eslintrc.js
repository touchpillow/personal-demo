module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
    sourceType: "script",
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    "eslint:standard",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  // required to lint *.vue files
  plugins: ["html"],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-unused-vars": [
      2,
      {
        // 允许声明未使用变量
        vars: "local",
        // 参数不检查
        args: "none",
      },
    ],
    // 关闭语句强制分号结尾
    semi: 0, //key值前面是否要有空格
    "no-undef": 0,
    "no-trailing-spaces": 0,
    "comma-dangle": 0,
    quotes: 0,
    "no-var": 0,
    "no-unused-expressions": 0,
    eqeqeq: 0,
    "spaced-comment": 0,
    "space-before-function-paren": 0,
    "one-var": 0,
    "no-new": 0,
    indent: 0,
  },
};
