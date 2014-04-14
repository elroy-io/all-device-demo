module.exports = function(zetta){

  zetta.observe('type="crockpot"').subscribe(function(crockpot){
    zetta.observe('type="smartwatch"').subscribe(function(pebble){

      pebble.on('select-button', function() {
        if(crockpot.state === 'on') {
          crockpot.call('turn-off');
        } else if (crockpot.state === 'off') {
          crockpot.call('turn-on');
        }
      });

      crockpot.on('lid-opened',function(){
	pebble.call('sms','IntelliChili','Lid was opened.');
      });

      crockpot.on('lid-closed',function(){
        pebble.call('sms','IntelliChili','Lid was closed.');
      });

    });
  });

};
