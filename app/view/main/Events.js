/**
 * Events view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Events', {
    extend : 'Ext.grid.Grid',
    store : 'Event',
    xtype : 'events',
    ui : 'all-events',
    columns : [
        {
            text : 'Session Title',
            dataIndex : 'title',
            flex : 1
        },
        {
            text : 'Track',
            dataIndex : 'track',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false
        },
        {
            text : 'Day & Time',
            dataIndex : 'time',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false
        },
        {
            text : 'Location',
            dataIndex : 'location',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false
        }
    ]
});
