module.exports = {
  'plugins': [
    'vue',
  ],
  'root': true,
  'env': {
    'node': true,
  },
  'extends': '@ourea/eslint-config-tq/vue',
  'parserOptions': {
    'parser': 'babel-eslint',
  },
  'rules': {
    'no-magic-numbers': 0,
    'no-console': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-self-closing': 0,
    'no-debugger': 0,
  },
}
