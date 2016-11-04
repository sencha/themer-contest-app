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
                {
                    iconCls : 'x-fa fa-plus',
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
            ]
        }
    ],
    columns : [
        {
            text : 'Session Title',
            dataIndex : 'title',
            flex : 1
        },
        {
            text : 'Track',
            dataIndex : 'track',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false
        },
        {
            text : 'Day & Time',
            dataIndex : 'time',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false
        },
        {
            text : 'Location',
            dataIndex : 'location',
            flex : 1,
            hidden : Ext.os.is.phone ? true : false
        }
    ]
})
