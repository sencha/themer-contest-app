/**
 * DoList view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.DoList', {
    extend : 'Ext.grid.Grid',
    store : 'DoList',
    xtype : 'dolist',
    autoScroll : true,
    hideHeaders : true,
    columns : [
        {
            xtype : 'checkcolumn',
            dataIndex : 'done',
            editor : {
                xtype : 'checkbox'
            }
        },
        {
            dataIndex : 'name',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "all-dolist-grid"
            }
        }
    ],
    itemConfig : {
        ui: 'all-dolist-grid',
        
        "header": {
            "ui": "all-dolist-grid"
        },
        "headerContainer": {
            "ui": "all-dolist-grid"
        }
        
    }
});
