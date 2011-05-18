Ext.define('WebUI.controller.Interface', {
  extend: 'Ext.app.Controller',
    
  stores: ['Ethernets',"IPs"],
  models: ['Ethernet','IP'],
  views:  ['interface.Ethernet','interface.IP'],
  
  refs: [{
    ref: 'ethernetData', selector: 'interface-ethernet dataview'
  },{
    ref: 'ipData', selector: 'interface-ip dataview'
  }],
  
  init: function(){
    this.control({
      'interface-ethernet button[action=add]': {
        click: this.addEthernet
      },
      'interface-ethernet button[action=remove]': {
        click: this.removeEthernet
      },
      'interface-ip button[action=add]': {
        click: this.addIp
      },
      'interface-ip button[action=remove]': {
        click: this.removeIp
      }
    });
  },
  
  addEthernet: function(){
    this.addModel(
      this.getEthernetsStore(),
      this.getEthernetModel().create({name: 'interface',real_name: 'interface'})
    );
  },
  
  addIp: function(){
    this.addModel(
      this.getIPsStore(),
      this.getIPModel().create({dotted: '1.1.1.1'})
    );
  },
  
  removeEthernet: function(){
    this.removeSelected(this.getEthernetsStore(),this.getEthernetData());
  },
  
  removeIp: function(){
    this.removeSelected(this.getIPsStore(),this.getIpData());
  },
  
  addModel: function(store,model){
    store.add(model);
    store.sync();
  },
  
  removeSelected: function(store,data){
    store.remove(data.getSelectionModel().getSelection()[0]);
    store.sync();
  }
});
