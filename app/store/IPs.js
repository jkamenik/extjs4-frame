Ext.define('WebUI.store.IPs', {
  extend: 'Ext.data.Store',
  model:  'WebUI.model.IP',
  autoLoad: true,
  
  proxy: {
    type: 'localstorage',
    id  : 'ips'
  }
});