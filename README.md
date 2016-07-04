# rollup-plugin-resolve-aliases

[![npm](https://img.shields.io/npm/v/rollup-plugin-resolve-aliases.svg)](https://www.npmjs.com/package/rollup-plugin-resolve-aliases) [![Dependencies](https://img.shields.io/david/timdp/rollup-plugin-resolve-aliases.svg)](https://david-dm.org/timdp/rollup-plugin-resolve-aliases) [![Build Status](https://img.shields.io/travis/timdp/rollup-plugin-resolve-aliases/master.svg)](https://travis-ci.org/timdp/rollup-plugin-resolve-aliases) [![Coverage Status](https://img.shields.io/coveralls/timdp/rollup-plugin-resolve-aliases/master.svg)](https://coveralls.io/r/timdp/rollup-plugin-resolve-aliases) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

Resolves aliases.

## Installation

```bash
npm install --save-dev rollup-plugin-resolve-aliases
```

## Usage

```js
import resolveAliases from 'rollup-plugin-resolve-aliases'

export default {
  entry: 'src/index.js',
  dest: 'dist/my-lib.js',
  plugins: [
    resolveAliases({
      aliases: {
        'module-foo': 'node_modules/module-foo/main.js',
        'module-bar': 'node_modules/baz/node_modules/quux/src/'
      }
    })
  ]
}
```

## Author

[Tim De Pauw](https://tmdpw.eu/)

## License

MIT
