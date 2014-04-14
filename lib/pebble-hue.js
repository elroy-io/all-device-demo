module.exports = function(zetta) {
  zetta.observe('type="smartwatch"').subscribe(function(watch) {
    zetta.observe('type="huehub"').subscribe(function(hub) {
      watch.on('top-button', function() {
        hub.call('blink');
      });
    });
  });
};
