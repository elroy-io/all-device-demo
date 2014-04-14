module.exports = function intellichiliBlink(zetta){

  zetta.observe('type="crockpot"').subscribe(function(crockpot){
    
    zetta.observe('type="huehub"').subscribe(function(hub){

      crockpot.on('lid-opened',function(){
        hub.call('blink');
      });

      crockpot.on('lid-closed',function(){
        hub.call('blink');
      });
    });

  });

};
