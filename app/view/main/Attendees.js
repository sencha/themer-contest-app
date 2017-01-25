/**
 * Attendees view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Attendees', {
    extend : 'Ext.grid.Grid',
    xtype : 'attendees',
    store : 'Attendee',
    border : true,
    items : [
        {
            xtype : 'toolbar',
            ui : 'attendees-toolbar',
            title : 'Attendees',
            height : 60,
            docked : 'top',
            items : [
                '->',
                {
                    iconCls : 'x-fa fa-plus',
                    ui:'add-attendee-button',
                    handler : function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype : 'panel',
                                floated : true,
                                modal : true,
                                hideOnMaskTap : true,
                                width : 320,
                                height : 210,
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
                                        title : 'Add Attendee',
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
                                                label : 'Name',
                                                ui:'add-attendee-name-textfield'
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Job Title',
                                                ui:'add-attendee-title-textfield'
                                            },
                                            {
                                                xtype : 'textfield',
                                                label : 'Email',
                                                ui:'add-attendee-email-textfield'
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
            text : 'Name',
            dataIndex : 'name',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "attendees-grid"
            }
        },
        {
            text : 'Job Title',
            dataIndex : 'title',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "attendees-grid"
            }
        },
        {
            text : 'Company',
            dataIndex : 'company',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "attendees-grid"
            }
        },
        {
            text : 'Email',
            dataIndex : 'email',
            flex : 1,
            "cell": {
                "xtype": "gridcell",
                "ui": "attendees-grid"
            }
        }
    ],
    itemConfig : {
        ui: 'attendees-grid',
        
        "header": {
            "ui": "attendees-grid"
        },
        "headerContainer": {
            "ui": "attendees-grid"
        }
        
    }
});
