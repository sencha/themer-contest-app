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
            flex : 1
        },
        {
            text : 'Job Title',
            dataIndex : 'title',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false
        },
        {
            text : 'Company',
            dataIndex : 'company',
            flex : 1
        }
    ]
});
