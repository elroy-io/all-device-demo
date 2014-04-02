var PebbleScout = require('elroy-pebble-driver');

module.exports = function(runtime) {
  runtime.scouts.push(PebbleScout);
};
