module.exports = function(elroy){

  elroy.observe('type="crockpot"').subscribe(function(crockpot){
    elroy.observe('type="smartwatch"').subscribe(function(pebble){


      crockpot.on('lid-opened',function(){
	pebble.call('sms','IntelliChili','Lid was opened.');
      });

      crockpot.on('lid-closed',function(){
        pebble.call('sms','IntelliChili','Lid was closed.');
      });

    });
  });

};
