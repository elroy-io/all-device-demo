var intelliChiliBlink = require('./lib/intellichili-blink.js')
  , photosensorHue = require('./lib/photosensor-hue.js')
  , intelliChiliPebble = require('./lib/intellichili-pebble.js');

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

};
