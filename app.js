var intelliChiliBlink = require('./lib/intellichili-blink')
  , photosensorHue = require('./lib/photosensor-hue')
  , intelliChiliPebble = require('./lib/intellichili-pebble')
  , photosensorDisplay = require('./lib/photosensor-display')
  , pebbleHue = require('./lib/pebble-hue');

var HelloApp = module.exports = function() {
  this.name = 'hello';
};

HelloApp.prototype.init = function(elroy) {

  // expose everything to the browser
  elroy.on('deviceready',function(device){
    elroy.expose(device);
  });
  
  // setup hue notification for intellichili
  intelliChiliBlink(elroy);

  // setup nightlight between all photosensors and hubhub
  photosensorHue(elroy);

  // pebble notifications for intelli chili
  intelliChiliPebble(elroy);
  
  // display values on photosensor
  photosensorDisplay(elroy);

  pebbleHue(elroy);
  
};
