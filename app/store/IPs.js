Ext.define('WebUI.store.IPs', {
  extend: 'Ext.data.Store',
  model:  'WebUI.model.IP',
  
  idProperty: 'uid',
  
  data: [
    {uid: 0, dotted: '1.1.1.1'},
    {uid: 1, dotted: '2.2.2.2'},
    {uid: 2, dotted: '3.3.3.3'}
  ]
});