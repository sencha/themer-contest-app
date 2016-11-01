/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ThemerContestApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ThemerContestApp',
    requires : [
        'ThemerContestApp.*'
    ],
    stores: [
        // TODO: add global / shared stores here
        'NavigationStore'
    ],
    profiles : ['Phone', 'Tablet'],

    showViewportCard: function(xtype) {
		item = Ext.Viewport.child('component[xtype=' + xtype + ']');
		if (!item) {
			Ext.Viewport.add({ xtype: xtype });
		}
		Ext.Viewport.setActiveItem(xtype);
	},
    launch: function () {
        // TODO - Launch the application
        this.showViewportCard('main');
    }
});
