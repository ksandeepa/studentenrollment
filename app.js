// Set up loader
Ext.Loader.setConfig({ enabled: true });
Ext.Loader.setPath('studentenrollment', 'app');

// Required source files
Ext.Loader.require('studentenrollment.view.quarterView');
Ext.application({
	name : 'studentenrollment',
	//autoCreateViewport : true,
	//renderTo: 'divTwo',
	//height:'80',
	//appFolder: 'app',
	launch : function() {
		Ext.create('Ext.panel.Panel', {
        layout: 'fit',
        renderTo: 'divTwo', // i've added div to html
        width: '100%',
        height: '100%',
        items: [
            {
                xtype: 'quarterView',
                title: 'Tasks',
                html: 'List of tasks will go here'
            }
        ]
    });			
	}
}
);
//Ext.Loader.setConfig({enabled:true});