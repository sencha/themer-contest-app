/**
 * Main Application class
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ThemerContestApp',
    requires : [
        'ThemerContestApp.*'
    ],
    stores: [
        // TODO: add global / shared stores here
        'NavigationStore',
        'Registration',
        'Event',
        'DoList',
        'Speaker',
        'Attendee'
    ],
    profiles : ['Phone', 'Tablet'],

    /**
     * @method
     * Sets view port card
     */
    showViewportCard: function(xtype) {
		item = Ext.Viewport.child('component[xtype=' + xtype + ']');
		if (!item) {
			Ext.Viewport.add({ xtype: xtype });
		}
		Ext.Viewport.setActiveItem(xtype);
	},
    /**
     * @method
     * Sets default card
     */
    launch: function () {
        // TODO - Launch the application
        this.showViewportCard('main');
    }
});
