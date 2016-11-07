/**
 * Attendees view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Attendees', {
    extend : 'Ext.grid.Grid',
    store : 'Attendee',
    xtype : 'attendees',
    requires : ['Ext.grid.plugin.RowExpander'],
    hideHeaders: true,
    items : [
        {
            xtype : 'toolbar',
            ui : 'moible-attendees-toolbar',
            items : [
                '->',
                {
                    iconCls : 'x-fa fa-plus',
                    handler : function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype : 'panel',
                                floated : true,
                                modal : true,
                                hideOnMaskTap : true,
                                width : 320,
                                height : 285,
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
            text : 'Name',
            dataIndex : 'name',
            flex : 1
        }
    ],
    plugins : {
        type : 'rowexpander'
    },
    itemConfig : {
        body : {
            tpl : [
                '{job_title}<br />',
                '<a href="mailto:{email}">{email}</a><br />'
            ]
        }
    }

});
