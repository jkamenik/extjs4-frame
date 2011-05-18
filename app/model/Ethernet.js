Ext.define('WebUI.model.Ethernet', {
  extend: 'Ext.data.Model',
  
  hasMany: 'IP',
  idProperty: 'uid',
  
  proxy: {
    type: 'localstorage',
    id  : 'ethernets'
  },
    
  fields: [
    {name: 'uid',       type: 'number'},
    {name: 'name',      type: 'string'},
    {name: 'real_name', type: 'string'}
  ]
});