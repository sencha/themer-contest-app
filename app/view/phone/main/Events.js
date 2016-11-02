Ext.define('ThemerContestApp.view.phone.main.Events', {
    extend : 'Ext.grid.Grid',
    store : 'Event',
    xtype : 'events',
    requires : ['Ext.grid.plugin.RowExpander'],
    hideHeaders: true,
    items : [
        {
            xtype : 'toolbar',
            items : [
                {
                    text : 'Add Event',
                    iconCls : 'x-fa fa-plus',
                    handler : function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype : 'panel',
                                floated : true,
                                modal : true,
                                hideOnMaskTap : true,
                                width : 320,
                                height : 350,
                                autoScroll : true,
                                showAnimation : {
                                    type : 'popIn',
                                    duration : 250,
                                    easing : 'ease-out'
                                },
                                hideAnimation: {
                                    type: 'popOut',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                centered: true,
                                items : [
                                    {
                                        xtype : 'formpanel',
                                        padding : 10,
                                        title : 'Add Event',
                                        defaults : {
                                            labelWidth : 120
                                        },
                                        items : [
                                            {
                                                xtype : 'toolbar',
                                                docked : 'bottom',
                                                items : [
                                                    '->',
                                                    {
                                                        text : 'Cancel',
                                                        iconCls : 'x-fa fa-times',
                                                        scope : this,
                                                        handler : function () {
                                                            this.overlay.hide();
                                                        }
                                                    },
                                                    {
                                                        text : 'Add',
                                                        scope : this,
                                                        iconCls : 'x-fa fa-plus',
                                                        handler : function () {
                                                            this.overlay.hide();
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Session Title'
                                            },
                                            {
                                                xtype : 'datepickerfield',
                                                label : 'Date'
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Time'
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Location'
                                            }
                                        ]
                                    }
                                ]
                            });
                        }
                        this.overlay.show();
                    }

                }
            ],
            docked : 'top'
        }
    ],  
    columns : [
        {
            text : 'Session Title',
            dataIndex : 'title',
            flex : 1
        }
    ],
    plugins : {
        type : 'gridrowexpander'
    },
    itemConfig : {
        body : {
            tpl : [
                '{time}<br />',
                '{location}<br />'
            ]
        }
    }
    
});