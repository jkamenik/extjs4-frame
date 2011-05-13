Ext.define('WebUI.view.layout.Nav',{
  extend: 'Ext.tree.Panel',
  alias: 'widget.layout.nav',
  
  split: true,
  rootVisible: false,
  
  store: Ext.create('Ext.data.TreeStore',{
    root: {
      expanded: true, 
      text:"",
      user:"",
      status:"", 
      children: [
        { text:"detention", leaf: true },
        { text:"homework", expanded: true, 
          children: [
            { text:"book report", leaf: true },
            { text:"alegrbra", leaf: true}
          ]
        },
        { text: "buy lottery tickets", leaf:true }
      ]
    }
  })
});