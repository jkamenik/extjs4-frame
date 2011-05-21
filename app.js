Ext.Loader.setConfig({enabled: true});
Ext.application({
  name: 'WebUI',
  
  requires: ['Ext.tip.*'],
  
  controllers: ["Nav",'Interface'],
  
  launch: function(){
    Ext.tip.QuickTipManager.init();
  }
});