/**
 * Events view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Events', {
    extend : 'Ext.grid.Grid',
    store : 'Event',
    xtype : 'events',
    columns : [
        {
            text : 'Session Title',
            dataIndex : 'title',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "all-events-grid"
            }
        },
        {
            text : 'Track',
            dataIndex : 'track',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "all-events-grid"
            }
        },
        {
            text : 'Day & Time',
            dataIndex : 'time',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "all-events-grid"
            }
        },
        {
            text : 'Location',
            dataIndex : 'location',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "all-events-grid"
            }
        }
    ],
    itemConfig : {
        ui: 'all-events-grid',
        
        "header": {
            "ui": "all-events-grid"
        },
        "headerContainer": {
            "ui": "all-events-grid"
        }
        
    }
});
