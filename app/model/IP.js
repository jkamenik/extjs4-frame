Ext.define('WebUI.model.IP', {
  extend: 'Ext.data.Model',
  
  // need to add a binding to interface
    
  fields: [
    {name: 'uid',       type: 'number'},
    {name: 'dotted',    type: 'string'}
  ]
});