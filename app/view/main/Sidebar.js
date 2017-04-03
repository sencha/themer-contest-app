/**
 * Sidebar component
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Sidebar', {
    extend : 'Ext.Container',
    xtype : 'sidebar',
    reference : 'sidebar',
    cls: 'sidebar',
    width : 250,
    layout : 'vbox',
    items : {
        xtype : 'navigation',
        flex: 1
    }
})
