# simple-dispatcher
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Attach multiple listeners to a single emitter.

## Installation
```bash
npm install simple-dispatcher
```

## Usage
```js
var dispatcher = require('simple-dispatcher');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// register callbacks
dispatcher(emitter, {
  myEvent: [myFn1, myFn2],
  end: myFn3
});

// dispatch event
emitter.emit('myEvent', {foo: 'bar'});
```

## See also
- [event-aggregate](https://github.com/yoshuawuyts/event-aggregate)
- [barracks](https://github.com/yoshuawuyts/barracks)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/simple-dispatcher.svg?style=flat-square
[npm-url]: https://npmjs.org/package/simple-dispatcher
[travis-image]: https://img.shields.io/travis/yoshuawuyts/simple-dispatcher.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/simple-dispatcher
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/simple-dispatcher.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/simple-dispatcher?branch=master
[downloads-image]: http://img.shields.io/npm/dm/simple-dispatcher.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/simple-dispatcher
