module.exports = function(elroy) {
  elroy.observe('type="smartwatch"').subscribe(function(watch) {
    elroy.observe('type="huehub"').subscribe(function(hub) {
      watch.on('top-button', function() {
        hub.call('blink');
      });
    });
  });
};
