Ext.define('WebUI.view.interface.Ethernet',{
  extend: 'Ext.grid.Panel',
  alias: 'widget.interface-ethernet',
  
  store: 'Ethernets',
  
  columns: [{
    header: 'Name',
    flex: 1,
    dataIndex: 'real_name'
  },{
    header:    'Physical Name',
    flex:      1,
    dataIndex: 'name'
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