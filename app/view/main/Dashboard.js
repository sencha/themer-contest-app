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
                    width : '75%',
                    border : true,
                    title : 'New Registrations',
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
            flex : 1,
            layout : {
                type : 'hbox'
            },
            margin : '0 0 10 0',
            title : 'All Events',
            border : true,
            items : [
                {
                    xtype : 'events',
                    header : true,
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
                    border : true,
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
                    header : true,
                    title : 'Total Registrations',
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