module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:react/recommended'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'global-require': 0,
    'comma-dangle': 0,
    'spaced-comment': 0,
    'new-cap': [
      2,
      {
        capIsNewExceptions: ['Map'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/forbid-prop-types': 0,
    'react/prop-types': [
      2,
      {
        ignore: ['focused'],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'prefer-destructuring': 0,
    'react/prefer-stateless-function': 0,
    'one-var': 0,
    'arrow-parens': [2, 'as-needed'],
    'object-curly-newline': 0,
    'import/no-cycle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': [
      'error',
      'property assignment',
      {
        defaultProps: 'static public field',
        propTypes: 'static public field',
      },
    ],
    'react/no-array-index-key': 0,
    'class-methods-use-this': 0,
  },
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    window: false,
    XMLHttpRequest: false,
    pit: false,
    _: false,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
};
