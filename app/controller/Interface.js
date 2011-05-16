Ext.define('WebUI.controller.Interface', {
  extend: 'Ext.app.Controller',
    
  stores: ['Ethernets',"IPs"],
  models: ['Ethernet','IP'],
  views:  ['interface.Ethernet','interface.IP']
});
