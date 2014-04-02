var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Pebble = require('node-pebble');
var PebbleDriver = require('../drivers/pebble_driver.js');
var serialPort = require("serialport");

var serial = '/dev/tty.PebbleE8EA-SerialPortSe';


var PebbleScout = module.exports = function() {
  EventEmitter.call(this);
};
util.inherits(PebbleScout, EventEmitter);

PebbleScout.prototype.init = function(next) {
  var self = this;
  serialPort.list(function (err, ports) {
    ports.forEach(function(port) {
      
      if(port.comName.search('Pebble') !== -1){
	var pebble = new Pebble(port.comName);
	pebble.on('open', function() {
	  self.emit('discover', PebbleDriver, pebble);
	});
      }

    });
    next(err);
  });
};

