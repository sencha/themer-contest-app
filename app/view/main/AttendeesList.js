/**
 * Attendees Grid
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.AttendeesList', {
    extend : 'Ext.grid.Grid',
    store : 'Attendee',
    xtype : 'attendeeslist',
    border : true,
    items : [
        {
            xtype : 'toolbar',
            items : [
                {
                    text : 'Add Attendee',
                    iconCls : 'x-fa fa-plus',
                    handler : function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype : 'formpanel',
                                floated : true,
                                modal : true,
                                hideOnMaskTap : true,
                                width : 320,
                                height : 400,
                                padding : 10,
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
                                        label : 'Name'
                                    },
                                    {
                                        xtype : 'textfield',
                                        label : 'Job Title'
                                    },
                                    {
                                        xtype : 'textfield',
                                        label : 'Email'
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
