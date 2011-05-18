Ext.define('WebUI.view.interface.IP',{
  extend: 'Ext.grid.Panel',
  alias: 'widget.interface-ip',
  
  store: 'IPs',
  
  columns: [{
    header: 'IP Address',
    flex: 1,
    dataIndex: 'dotted'
  },{
    header: 'Interface',
    flex: 2,
    dataIndex: 'ethernet_uid'// ,
    //     renderer: function(value,meta,model){
    //       console.log(model.getEthernet());
    //       return value;
    //     }
  }],
  
  dockedItems: [{
    xtype: 'toolbar',
    items: [{
      text:   'Add',
      action: 'add'
    },{
      text:     'Remove',
      disabled: true,
      action:   'remove'
    }]
  }],
  
  listeners: {
    selectionChange: function(view,selection){
      var button   = this.down('button[action=remove]');
      var selected = selection[0];
      if(selected){
        button.enable();
      }else{
        button.disable();
      }
    }
  }
});