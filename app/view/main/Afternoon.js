/**
 * Afternoon view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Afternoon', {
extend : 'Ext.grid.Grid',
    store : 'Event',
    xtype : 'afternoon',
    border : true,
    items : [
        {
            xtype : 'toolbar',
            ui : 'afternoon-toolbar',
            title : 'Events - Afternoon',
            height : 60,
            docked : 'top',
            items : [
                '->',
                {
                    iconCls : 'x-fa fa-plus',
                    ui:'add-event-afternoon-button',
                    handler : function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype : 'panel',
                                floated : true,
                                modal : true,
                                hideOnMaskTap : true,
                                width : 400,
                                height : 265,
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
                                                label : 'Session Title',
                                                ui:'afternoon-session-title-textfield'
                                            },
                                            {
                                                xtype : 'datepickerfield',
                                                label : 'Date',
                                                ui:'afternoon-date-datepickerfield',
                                                triggers: {
                                                    expand: {
                                                        ui: 'afternoon-datetrigger'
                                                    }
                                                }
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Time',
                                                ui:'afternoon-time-textfield'
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Location',
                                                ui:'afternoon-location-textfield'
                                            }
                                        ]
                                    }
                                ]
                            });
                        }
                        this.overlay.show();
                    }
                }
            ]
        }
    ],
    columns : [
        {
            text : 'Session Title',
            dataIndex : 'title',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "events-afternoon-grid"
            }
        },
        {
            text : 'Track',
            dataIndex : 'track',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "events-afternoon-grid"
            }
        },
        {
            text : 'Day & Time',
            dataIndex : 'time',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "events-afternoon-grid"
            }
        },
        {
            text : 'Location',
            dataIndex : 'location',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "events-afternoon-grid"
            }
        }
    ],
    itemConfig : {
        ui: 'events-afternoon-grid',
        
        "header": {
            "ui": "events-afternoon-grid"
        },
        "headerContainer": {
            "ui": "events-afternoon-grid"
        }
        
    }
})
