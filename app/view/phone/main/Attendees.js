/**
 * Attendees view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Attendees', {
    extend : 'Ext.grid.Grid',
    store : 'Attendee',
    xtype : 'attendees',
    cls: 'attendees-phone',
    requires : ['Ext.grid.plugin.RowExpander'],
    hideHeaders: true,
    columns : [
        {
            text : 'Name',
            dataIndex : 'name',
            flex : 1
        }
    ],
    plugins : {
        type : 'rowexpander'
    },
    itemConfig : {
        body : {
            tpl : [
                '{job_title}<br />',
                '<i class="fa fa-envelope attendee-email-icon" aria-hidden="true"></i><a class="attendee-email" href="mailto:{email}">{email}</a><br />'
            ]
        }
    }

});
