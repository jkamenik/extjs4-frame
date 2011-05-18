Ext.define('WebUI.model.IP', {
  extend: 'Ext.data.Model',
  // requires: ['WebUI.model.Ethernet', 'Ext.data.HasManyAssociation', 'Ext.data.BelongsToAssociation'],
  
  associations: [{
    type: 'belongsTo', 
    model: 'WebUI.model.Ethernet', 
    getterName: 'getEthernet', 
    primaryKey: 'uid', 
    foreignKey: 'ethernet_uid'
  }],
  
  idProperty: 'uid',
  
  proxy: {
    type: 'localstorage',
    id  : 'ips'
  },

  fields: [
    {name: 'uid',          type: 'number'},
    {name: 'dotted',       type: 'string'},
    {name: 'ethernet_uid', type: 'number'}
  ]
});