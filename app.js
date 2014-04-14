var intelliChiliBlink = require('./lib/intellichili-blink')
  , photosensorHue = require('./lib/photosensor-hue')
  , intelliChiliPebble = require('./lib/intellichili-pebble')
  , photosensorDisplay = require('./lib/photosensor-display')
  , pebbleHue = require('./lib/pebble-hue');

var HelloApp = module.exports = function() {
  this.name = 'hello';
};

HelloApp.prototype.init = function(zetta) {

  // expose everything to the browser
  zetta.on('deviceready',function(device){
    zetta.expose(device);
  });
  
  // setup hue notification for intellichili
  intelliChiliBlink(zetta);

  // setup nightlight between all photosensors and hubhub
  photosensorHue(zetta);

  // pebble notifications for intelli chili
  intelliChiliPebble(zetta);
  
  // display values on photosensor
  photosensorDisplay(zetta);

  pebbleHue(zetta);
  
};
