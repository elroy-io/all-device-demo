module.exports = function intellichiliBlink(elroy){

  elroy.observe('type="crockpot"').subscribe(function(crockpot){
    
    elroy.observe('type="huehub"').subscribe(function(hub){

      crockpot.on('lid-closed',function(){
        hub.call('blink');
      });

      crockpot.on('lid-closed',function(){
        hub.call('blink');
      });
    });

  });

};
