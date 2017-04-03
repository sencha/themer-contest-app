/**
 * Dashboard view (tablet)
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Dashboard', {
    extend : 'Ext.Container',
    xtype : 'dashboard',
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    padding : 10,
    items : [
        {
            xtype : 'container',
            flex : 1,
            layout : {
                type : 'hbox'
            },
            margin : '0 0 10 0',
            items : [
                {
                    xtype : 'confdays',
                    title : 'Days To Conference',
                    width : '24%'
                },
                {
                    xtype : 'spacer',
                    width : '1%'
                },
                {
                    xtype : 'panel',
                    ui : 'new-registrations',
                    width : '75%',
                    title : 'New Registrations',
                    border : true,
                    layout : 'fit',
                    iconCls : 'x-fa fa-user-plus',
                    items : [
                      {
                      xtype : 'registrations'
                      }
                    ]
                  }
                ]
        },
        {
            xtype : 'panel',
            ui : 'all-events',
            flex : 1,
            layout : {
                type : 'fit'
            },
            margin : '0 0 10 0',
            title : 'All Events',
            iconCls : 'x-fa fa-bolt',
            border : true,
            width: '100%',
            items : [
                {
                    xtype : 'events',
                    flex: 1
                }
            ]
        },
        {
            xtype : 'container',
            flex : 1,
            layout : {
                type : 'hbox',
                align : 'stretch'
            },
            items : [
                {
                    xtype : 'panel',
                    ui : 'to-do-list',
                    width : '75%',
                    title : 'To Do List',
                    iconCls : 'x-fa fa-check-square',
                    border : true,
                    layout : 'fit',
                    items : [
                      {
                        xtype : 'dolist'
                      }
                    ]
                },
                {
                    xtype : 'spacer',
                    width : '1%'
                },
                {
                    xtype : 'panel',
                    ui : 'total-registrations',
                    width : '24%',
                    header : true,
                    title : 'Total Registrations',
                    iconCls : 'x-fa fa-level-up',
                    width : '24%',
                    border : true,
                    layout : {
                        type : 'hbox',
                        align : 'center',
                        pack : 'center'
                    },
                    items : [
                        {
                            xtype : 'progress',
                            ui : 'progress-bar',
                            value : 0.75,
                            text : '736/1000 Registered',
                            width : 250
                        }
                    ]
                }
            ]
        }

    ]
})
