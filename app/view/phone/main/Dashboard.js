/**
 * Dashboard view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Dashboard', {
    extend : 'Ext.Container',
    xtype : 'dashboard',
    layout : {
        type : 'vbox'
    },
    items : [
        {
            xtype : 'confdays',
            flex : 1
        },
        {
            xtype : 'panel',
            title : 'New Registrations',
            flex : 1,
            items : [
                {
                    xtype : 'registrations',
                    hideHeaders : true
                }
            ]
        },
        {
            xtype : 'panel',
            title : 'All Events',
            flex : 1,
            items : [
                {
                    xtype : 'events',
                    minHeight : 150,
                    hideHeaders : true
                }
            ]            
        },
        {
            xtype : 'panel',
            header : true,
            title : 'To Do List',
            flex : 1,
            items : [
                {
                    xtype : 'dolist'
                }
            ]
        },
        {
            xtype : 'panel',
            header : true,
            title : 'Total Registrations',
            layout : {
                type : 'hbox',
                align : 'center',
                pack : 'center'
            },
            flex : 1,
            items : [
                {
                    xtype : 'progress',
                    value : 0.75,
                    text : '736/1000 Registered',
                    width : 250
                }
            ]                    
        }
    ]
})