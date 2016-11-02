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
            xtype : 'registrations',
            title : 'New Registrations',
            hideHeaders : true,
            flex : 1
        },
        {
            xtype : 'events',
            title : 'All Events',
            hideHeaders : true,
            flex : 1           
        },
        {
            xtype : 'dolist',
            header : true,
            title : 'To Do List',
            flex : 1
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