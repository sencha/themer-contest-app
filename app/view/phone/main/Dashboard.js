/**
 * Dashboard view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Dashboard', {
    extend : 'Ext.Container',
    xtype : 'dashboard',
    scrollable : true,
    layout : {
        type : 'vbox'
    },
    items : [
        {
            xtype : 'confdays',
            height : 400
            // flex : 2
        },
        {
            xtype : 'registrations',
            title : 'New Registrations',
            hideHeaders : true,
            height : 400
            // flex : 2
        },
        {
            xtype : 'events',
            title : 'All Events',
            hideHeaders : true,
            height : 400
            // flex : 2
        },
        {
            xtype : 'dolist',
            header : true,
            title : 'To Do List',
            height : 400
            // flex : 2
        },
        {
            xtype : 'panel',
            header : true,
            height : 400,
            title : 'Total Registrations',
            layout : {
                type : 'hbox',
                align : 'center',
                pack : 'center'
            },
            // flex : 2,
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
