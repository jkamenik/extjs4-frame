Ext.define('WebUI.store.Nav',{
  extend:  'Ext.data.TreeStore',
  storeId: 'nav',
  model:   'WebUI.model.Nav',
  autoLoad: true,
  
  requires: ['WebUI.model.Nav'],
  
  proxy: {
    type: 'ajax',
    url:  'nav.json'
  }
});