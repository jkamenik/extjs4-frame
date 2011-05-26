Ext.define('WebUI.model.IP', {
  extend: 'Ext.data.Model',
  
  associations: [{
    type: 'belongsTo', 
    model: 'WebUI.model.Ethernet', 
    getterName: 'getEthernet',
    setterName: 'setEthernet',
    primaryKey: 'uid', 
    foreignKey: 'ethernet_uid'
  }],
  
  idProperty: 'uid',

  fields: [
    {name: 'uid',          type: 'number'},
    {name: 'dotted',       type: 'string'},
    {name: 'ethernet_uid', type: 'number'}
  ],
  
  proxy: {
    type: 'localstorage',
    id  : 'ips'
  }
});