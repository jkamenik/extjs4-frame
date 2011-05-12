Ext.define('WebUI.view.Viewport',{
  extend: 'Ext.container.Viewport',
  layout: 'border',
  
  requires: [
    'WebUI.view.Header',
    'WebUI.view.Footer'
  ],
  
  items: [{
    xtype:  'page.header',
    region: 'north',
    height: 57
  },{
    region: 'south',
    xtype:  'page.footer'
  },{
    region: 'west',
    split: true,
    width: 200,
    html: 'nav bar'
  },{
    region: 'center',
    html: 'content'
  }]
});