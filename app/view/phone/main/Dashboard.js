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
            height : 200,
            margin: '10 0 10 0'
        },
        {
            xtype: 'panel',
            title : 'New Registrations',
            iconCls : 'x-fa fa-user-plus',
            height : 400,
            layout : 'fit',
            margin : '0 0 10 0',
            items: {
                xtype : 'registrations',
                hideHeaders : true
            }
        },
        {
            xtype : 'panel',
            title : 'All Events',
            iconCls : 'x-fa fa-bolt',
            height : 400,
            layout : 'fit',
            margin : '0 0 10 0',
            items: {
                xtype : 'events',
                hideHeaders : true
            }
        },
        {
            xtype : 'panel',
            title : 'To Do List',
            iconCls : 'x-fa fa-check-square',
            height : 400,
            layout : 'fit',
            margin : '0 0 10 0',
            items: {
                xtype : 'dolist'
            }
        },
        {
            xtype : 'panel',
            ui : 'total-registrations',
            header : true,
            height : 200,
            title : 'Total Registrations',
            iconCls : 'x-fa fa-level-up',
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
