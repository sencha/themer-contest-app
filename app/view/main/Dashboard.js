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
                    header : true,
                    title : 'New Registrations',
                    width : '75%',
                    border : true
                }
            ]
        },
        {
            xtype : 'container',
            flex : 1,
            layout : {
                type : 'hbox'
            },
            margin : '0 0 10 0',
            items : [
                {
                    xtype : 'panel',
                    header : true,
                    title : 'All Events',
                    width : '100%',
                    border : true
                }
            ]
        },
        {
            xtype : 'container',
            flex : 1,
            layout : {
                type : 'hbox'
            },
            items : [
                {
                    xtype : 'panel',
                    header : true,
                    title : 'To Do List',
                    width : '75%',
                    border : true
                },
                {
                    xtype : 'spacer',
                    width : '1%'
                },
                {
                    xtype : 'panel',
                    header : true,
                    title : 'Total Registrations',
                    width : '24%',
                    border : true
                }
            ]
        }        
   
    ]
})