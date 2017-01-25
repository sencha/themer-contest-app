/**
 * Registrations view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Registrations', {
    extend : 'Ext.grid.Grid',
    store : 'Registration',
    xtype : 'registrations',
    autoScroll : true,
    minHeight : 100,
    columns : [
        {
            text : 'Name',
            dataIndex : 'name',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "new-registrations-grid"
            }
        },
        {
            text : 'Job Title',
            dataIndex : 'title',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "new-registrations-grid"
            }
        },
        {
            text : 'Company',
            dataIndex : 'company',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "new-registrations-grid"
            }
        }
    ],
    itemConfig : {
        ui: 'new-registrations-grid',
        
        "header": {
            "ui": "new-registrations-grid"
        },
        "headerContainer": {
            "ui": "new-registrations-grid"
        }
        
    }
});
