Ext.define('WebUI.controller.Nav', {
    extend: 'Ext.app.Controller',
    
    refs: [{
      ref:      'content',
      selector: 'layout-content'
    }],

    init: function() {
        this.control({
            'layout-nav': {
                itemclick: this.onNavSelected
            }
        });
    },
    
    onNavSelected: function(view,model,element,index,event){
      var link = model.get('link');
      if (link) {
        window.top.location = link;
      }
      
      if(!model.get('panel')){return;}
      
      var panel = Ext.ComponentQuery.query('.'+model.get('panel'));
      
      if(!panel.length > 0 || !this.getContent()){
        console.log('Either content or panel is not found');
        return;
      }
      
      this.getContent().getLayout().setActiveItem(panel[0]);
    }
});
