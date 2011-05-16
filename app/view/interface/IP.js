Ext.define('WebUI.view.interface.IP',{
  extend: 'Ext.grid.Panel',
  alias: 'widget.interface-ip',
  
  store: 'IPs',
  
  columns: [{
    header: 'IP Address',
    flex: 1,
    dataIndex: 'dotted'
  }]
});