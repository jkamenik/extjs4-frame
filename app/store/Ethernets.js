Ext.define('WebUI.store.Ethernets', {
  extend: 'Ext.data.Store',
  model:  'WebUI.model.Ethernet',
  autoLoad: true,

  proxy: {
    type: 'localstorage',
    id  : 'ethernets'
  }
});