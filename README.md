# BVL
[![license](https://img.shields.io/github/license/value-fallback/bvl.svg?style=flat-square)](https://github.com/value-fallback/bvl/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/bvl.svg?style=flat-square)](https://www.npmjs.com/package/bvl)
[![npm](https://img.shields.io/npm/dt/bvl.svg?style=flat-square)](https://www.npmjs.com/package/bvl)
[![Travis](https://img.shields.io/travis/value-fallback/BVL.svg?style=flat-square)](https://travis-ci.org/value-fallback/BVL)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Fallback when a value is not [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

## Installation

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/bvl.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/bvl)

```
npm install bvl
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add bvl
```

## Usage

```javascript
const bvl = require('bvl');

// When a value is not Boolean, it will return fallback value.
let a = bvl(10, 'x'); // a = 'x'
let b = bvl([1, 2, 3], 5); // b = 5

// When a value is Boolean, it will return that value.
let c = bvl(true, 1); // c = true
let d = bvl(false, true); // d = false
```

## API

### bvl(value, fallbackValue)

#### value
A main value.

#### fallbackValue
A fallback value.
