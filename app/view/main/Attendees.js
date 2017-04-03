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
    margin : '10 10 10 10',
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
                    handler : function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype : 'formpanel',
                                cls: 'popup-form',
                                modal : true,
                                hideOnMaskTap : true,
                                width : 400,
                                height : 350,
                                padding : 20,
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
                                title : 'Add Attendee',
                                defaults : {
                                    labelWidth : 120
                                },
                                items : [
                                    {
                                        xtype : 'textfield',
                                        label : 'Name'
                                    },
                                    {
                                        xtype : 'textfield',
                                        label : 'Job Title'
                                    },
                                    {
                                        xtype : 'textfield',
                                        label : 'Email'
                                    },
                                     {
                                        xtype : 'toolbar',
                                        docked : 'bottom',
                                        items : [
                                            {
                                                text : 'Cancel',
                                                iconCls : 'x-fa fa-times',
                                                ui: 'attendees-button',
                                                scope : this,
                                                handler : function () {
                                                    this.overlay.hide();
                                                }
                                            },
                                            '->',
                                            {
                                                text : 'Add',
                                                scope : this,
                                                iconCls : 'x-fa fa-plus',
                                                ui: 'attendees-button',
                                                handler : function () {
                                                    this.overlay.hide();
                                                }
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
            flex : 1
        },
        {
            text : 'Job Title',
            dataIndex : 'title',
            flex : 1
        },
        {
            text : 'Company',
            dataIndex : 'company',
            flex : 1
        },
        {
            text : 'Email',
            dataIndex : 'email',
            flex : 1
        }
    ]
});
