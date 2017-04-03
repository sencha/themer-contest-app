/**
 * Sidebar component
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Sidebar', {
    extend : 'Ext.Container',
    xtype : 'sidebar',

    requires: [
        'Ext.layout.VBox',
        'ThemerContetApp.view.main.Navigation'
    ],

    reference : 'sidebar',
    width : 300,
    layout : 'vbox',
    items : {
        xtype : 'navigation',
        flex: 1
    }
})
