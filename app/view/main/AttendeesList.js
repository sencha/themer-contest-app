/**
 * Attendees Grid
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.AttendeesList', {
    extend : 'Ext.grid.Grid',
    store : 'Attendee',
    xtype : 'attendeeslist',
    columns : [
        {
            text : 'Name',
            dataIndex : 'name',
            flex : 1
        },
        {
            text : 'Job Title',
            dataIndex : 'title',
            flex : 1
        },
        {
            text : 'Company',
            dataIndex : 'company',
            flex : 1
        },
        {
            text : 'Email',
            dataIndex : 'email',
            flex : 1
        }
    ]
});