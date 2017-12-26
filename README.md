  # extra-log

[![CircleCI](https://circleci.com/gh/rumax/extra-log.svg?style=shield)](https://circleci.com/gh/rumax/extra-log)
[![codecov](https://codecov.io/gh/rumax/extra-log/branch/master/graph/badge.svg)](https://codecov.io/gh/rumax/extra-log)
[![npm version](https://badge.fury.io/js/extra-log.svg)](https://badge.fury.io/js/extra-log)

Simple wrapper for [console](https://developer.mozilla.org/en-US/docs/Web/API/Console) using
[chalk](https://www.npmjs.com/package/chalk) and [cowsay](https://www.npmjs.com/package/cowsay) to provide
basic log functionality with a possibility to use colors and more
noticeable error and warning types of log. This is especially useful in huge logs.

## Example

```js
const log = require('extra-log');

log.msg('Message');
log.info('Info');
log.success('Success');
log.warn('Warn');
log.error('Error');
```

![Output](https://github.com/rumax/extra-log/blob/master/demo/demo.png?raw=true)
