Ext.define('WebUI.store.Ethernets', {
  extend: 'Ext.data.Store',
  model:  'WebUI.model.Ethernet',
  
  data: [
    {uid: 0, name: 'lo', real_name: 'lo'},
    {uid: 0, name: 'eth0', real_name: 'eth0'},
    {uid: 0, name: 'eth1', real_name: 'eth1'}
  ]
});