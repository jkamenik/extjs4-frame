Ext.define('WebUI.view.interface.Ethernet',{
  extend: 'Ext.grid.Panel',
  alias: 'widget.interface-ethernet',
  
  store: 'Ethernets',
  
  columns: [{
    header: 'Name',
    flex: 1,
    dataIndex: 'real_name'
  }]
});