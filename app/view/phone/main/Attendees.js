/**
 * Attendees view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Attendees', {
    extend : 'Ext.grid.Grid',
    store : 'Attendee',
    xtype : 'attendees',
    requires : ['Ext.grid.plugin.RowExpander'],
    hideHeaders: true,
    columns : [
        {
            text : 'Name',
            dataIndex : 'name',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "phone-attendees-grid"
            }
        }
    ],
    plugins : {
        type : 'rowexpander'
    },
    itemConfig : {
        body : {
            tpl : [
                '{job_title}<br />',
                '<a href="mailto:{email}">{email}</a><br />'
            ]
        },
        ui: 'phone-attendees-grid',
        
        "header": {
            "ui": "phone-attendees-grid"
        },
        "headerContainer": {
            "ui": "phone-attendees-grid"
        }
    }

});
