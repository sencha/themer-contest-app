/**
 * Navigation component
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContetApp.view.main.Navigation', {
    extend : 'Ext.list.Tree',
    xtype : 'navigation',
    ui : 'navigation',
    reference : 'navigation',
    store : 'NavigationStore',
    expanderFirst : false,
    expanderOnly : false,
    listeners : {
        selectionchange : 'onSelectionChange'
    }
})
