Ext.define('WebUI.model.Ethernet', {
  extend: 'Ext.data.Model',
    
  fields: [
    {name: 'uid',       type: 'number'},
    {name: 'name',      type: 'string'},
    {name: 'real_name', type: 'string'}
  ]
});