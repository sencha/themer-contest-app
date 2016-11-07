/**
 * Speakers view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Speakers', {
    extend : 'Ext.Panel',
    xtype : 'speakers',
    border : true,
    layout : 'vbox',
    items : !Ext.os.is.Phone ? [
        {
            xtype : 'toolbar',
            ui : 'speakers-toolbar',
            title : 'Speakers',
            height : 60,
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
                                height : 270,
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
                                        title : 'Add Speaker',
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
                                                xtype : 'textareafield',
                                                rows : 2,
                                                label : 'Bio'
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
        },
        {
            xtype : 'list',
            ui : 'speakers-list',
            itemTpl : '{name}<br /><font style="color:#a0a0a0">{job_title}</font>',
            store : 'Speaker',
            flex : 1,
            height : 450,
            scrollable : 'y',
            listeners: {
              itemtap: function(list, index, target, record) {
                var main = Ext.ComponentQuery.query('[itemId=app-main]')[0];
                main.fireEvent('speakerselect', record);
              }
            },
            onItemDisclosure : function (record, btn) {
                var main = Ext.ComponentQuery.query('[itemId=app-main]')[0];
                console.log('main ', main);
                if (main) {
                    main.fireEvent('speakerselect', record, btn);
                }

            }
        }
    ] : [
        {
            xtype : 'list',
            ui : 'speakers-list',
            itemTpl : '{name}<br /><font style="color:#a0a0a0">{job_title}</font>',
            store : 'Speaker',
            flex : 1,
            height : 450,
            scrollable : 'y',
            listeners: {
              itemtap: function(list, index, target, record) {
                var main = Ext.ComponentQuery.query('[itemId=app-main]')[0];
                main.fireEvent('speakerselect', record);
              }
            },
            onItemDisclosure : function (record, btn) {
                var main = Ext.ComponentQuery.query('[itemId=app-main]')[0];
                console.log('main ', main);
                if (main) {
                    main.fireEvent('speakerselect', record, btn);
                }

            }
        }
    ]
});
