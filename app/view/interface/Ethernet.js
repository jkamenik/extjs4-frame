Ext.define('WebUI.view.interface.Ethernet',{
  extend: 'Ext.grid.Panel',
  alias: 'widget.interface-ethernet',
  
  requires: ['WebUI.view.EditGrid'],
  
  store: 'Ethernets',
  
  columns: [{
    header: 'Name',
    flex: 1,
    dataIndex: 'real_name',
    field: {xtype: 'textfield'}
  },{
    header:    'Physical Name',
    flex:      1,
    dataIndex: 'name',
    field: {xtype: 'textfield'}
  }],
  
  plugins: [Ext.create('Ext.grid.plugin.RowEditing',{
    listeners: {
      edit: function(editor){
        // this is needed otherwise localstore doesn't save it's data
        editor.store.sync();
      }
    }
  })],
  
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