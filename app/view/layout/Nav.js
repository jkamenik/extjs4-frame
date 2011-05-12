Ext.define('WebUI.view.layout.Nav',{
  extend: 'Ext.tree.Panel',
  alias: 'widget.layout.nav',
  
  requires: ['WebUI.store.Nav'],
  
  store: Ext.data.StoreManager.lookup('nav'),
  
  split:       true,
  rootVisible: false,
  
  html: "I am a nav bar"
});