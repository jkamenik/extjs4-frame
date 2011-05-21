Ext.define('WebUI.view.interface.IP',{
  extend: 'Ext.grid.Panel',
  alias: 'widget.interface-ip',
  
  store: 'IPs',
  
  columns: [{
    header: 'IP Address',
    flex: 1,
    dataIndex: 'dotted',
    field: {xtype: 'textfield'}
  },{
    header: 'Interface',
    flex: 1,
    dataIndex: 'ethernet_uid',
    field: {xtype: 'numberfield'}
    //     renderer: function(value,meta,model){
    //       console.log(model.getEthernet());
    //       return value;
    //     }
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