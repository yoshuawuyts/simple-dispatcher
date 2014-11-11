/**
 * Module dependencies
 */

var EventEmitter = require('events').EventEmitter;
var assert = require('assert');

/**
 * Expose `dispatcher()`.
 */

module.exports = Dispatcher;

/**
 * Dispatcher.
 *
 * @param {EventEmitter} emitter
 * @param {Object} events
 * @api public
 */

function Dispatcher(emitter, events) {
  if (!(this instanceof Dispatcher)) return new Dispatcher(emitter, events);

  assert(emitter instanceof EventEmitter, 'simple-dispatcher: emitter should be an EventEmitter');
  assert('object' == typeof events, 'simple-dispatcher: events should be an object');

  // iterate over keys in event
  // and map the cb values to the emitter.

  Object.keys(events).forEach(function(key) {
    var arr = Array.isArray(events[key]) ? events[key] : [events[key]];
    arr.forEach(function(cb) {
      emitter.on(key, cb);
    });
  });
}
