Ext.define('ThemerContetApp.view.main.Navigation', {
    extend : 'Ext.list.Tree',
    xtype : 'navigation',
    reference : 'navigation',
    store : 'NavigationStore',
    expanderFirst : false,
    expanderOnly : false,
    listeners : {
        selectionchange : 'onSelectionChange'
    }
})