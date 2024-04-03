| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/getboolean.svg)](https://badge.fury.io/js/getboolean) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-getboolean/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-getboolean) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-getboolean.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-getboolean) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-getboolean/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-getboolean?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-getboolean&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-getboolean) |

`getboolean` returns a Boolean value, whatever the input value.


| Input | Output |
| ----- | ------ |
| true | true |
| false | false |
| "true" | true |
| "false" | false |
| "" | false |
| undefined | false |
| "TRUE" | true |
| "FALSE" | false |


## Installation
`npm install @sineverba/getboolean`

## Usage

```js
import { getBoolean } from "getBoolean";

const booleanValue = getBoolean(true); // returns true
const booleanValue = getBoolean("TRUE"); // returns true
```

## Tests

`npm run test` for simple test

`npm run coverage` for coverage
