var median = require('median');

module.exports = function phtotosensorHue(elroy){
  var vals = [];  
  var levels = {
    low : 850,
    high : 1000
  };
  var lastval = '';

  elroy
    .observe('type="photosensor"')
    .subscribe(function(photosensor){
      photosensor.on('update',function(val){
	vals.push(val);
      });
    });

  elroy
    .observe('type="huehub"')
    .subscribe(function(hub){
      var firstRun = true;
      function set(val){
	hub.call('all-'+val);
	lastval = val;
      }
      
      setInterval(function(){
	if(vals.length === 0)
	  return;
	
	var value = median(vals);
	vals = [];
	
	if(firstRun){
	  firstRun = false;
	  if(value < (levels.high-levels.low)/2+levels.low ){
	    set('on');
	  } else {
	    set('off');
	  }
	}else if(value > levels.high && lastval === 'off'){
	  set('on');
	}else if(value < levels.low && lastval === 'on'){
	  set('off');
	}
	
      },300);
    });

};
