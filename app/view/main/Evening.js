/**
 * Evenint view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Evening', {
extend : 'Ext.grid.Grid',
    store : 'Event',
    xtype : 'evening',
    border : true,
    items : [
        {
            xtype : 'toolbar',
            ui : 'evening-toolbar',
            title : 'Events - Evening',
            height : 60,
            docked : 'top',
            items : [
                '->',
                {
                    iconCls : 'x-fa fa-plus',
                    ui:'add-event-evening-button',
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
                                                ui:'evening-title-textfield'
                                            },
                                            {
                                                xtype : 'datepickerfield',
                                                label : 'Date',
                                                ui:'evening-date-datepickerfield',
                                                triggers: {
                                                    expand: {
                                                        ui: 'evening-datetrigger'
                                                    }
                                                }
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Time',
                                                ui:'evening-time-textfield'
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Location',
                                                ui:'evening-location-textfield'
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
                "ui": "events-evening-grid"
            }
        },
        {
            text : 'Track',
            dataIndex : 'track',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "events-evening-grid"
            }
        },
        {
            text : 'Day & Time',
            dataIndex : 'time',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "events-evening-grid"
            }
        },
        {
            text : 'Location',
            dataIndex : 'location',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false,
            "cell": {
                "xtype": "gridcell",
                "ui": "events-evening-grid"
            }
        }
    ],
    itemConfig : {
        ui: 'events-evening-grid',
        
        "header": {
            "ui": "events-evening-grid"
        },
        "headerContainer": {
            "ui": "events-evening-grid"
        }
        
    }
})
