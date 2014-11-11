/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies.
 */

var EventEmitter = require('events').EventEmitter;
var dispatcher = require('./index');

/**
 * Test.
 */

describe('dispatcher', function() {
  it('should throw if a non-emitter is passed', function() {
    dispatcher.bind(dispatcher, 'foo')
      .should.throw('simple-dispatcher: emitter should be an EventEmitter');
  });

  it('should throw if a non-object is passed', function() {
    dispatcher.bind(dispatcher, new EventEmitter(), 'bar')
      .should.throw('simple-dispatcher: events should be an object');
  });

  it('should bind single values', function() {
    var emitter = new EventEmitter();

    function cb() {};

    dispatcher(emitter, {
      foo: cb
    });

    emitter._events.foo.should.eql(cb);
    cb();
  });

  it('should bind arrays of values', function() {
    var emitter = new EventEmitter();

    function cb() {};
    function cb2() {};

    dispatcher(emitter, {
      foo: [cb, cb2]
    });

    emitter._events.foo[0].should.eql(cb);
    emitter._events.foo[1].should.eql(cb2);
    cb();
    cb2();
  });
});
