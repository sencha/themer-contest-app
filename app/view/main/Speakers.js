/**
 * Speakers view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Speakers', {
    extend : 'Ext.Container',
    xtype : 'speakers',
    border : true,
    layout : 'vbox',
    margin : !Ext.os.is.Phone ? '10 10 10 10' : '0',
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
                                xtype : 'formpanel',
                                cls: 'form-popup',
                                modal : true,
                                hideOnMaskTap : true,
                                width : 400,
                                height : 380,
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
                                title : 'Add Speaker',
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
                                        xtype : 'textareafield',
                                        rows : 3,
                                        label : 'Bio'
                                    },
                                     {
                                        xtype : 'toolbar',
                                        docked : 'bottom',
                                        items : [
                                            
                                            {
                                                text : 'Cancel',
                                                ui: 'attendees-button',
                                                iconCls : 'x-fa fa-times',
                                                scope : this,
                                                handler : function () {
                                                    this.overlay.hide();
                                                }
                                            },
                                            '->',
                                            {
                                                text : 'Add',
                                                scope : this,
                                                ui: 'attendees-button',
                                                iconCls : 'x-fa fa-plus',
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
        },
        {
            xtype : 'list',
            ui : 'speakers-list',
            itemTpl : '{name}<br /><span class="speaker-job">{job_title}</span>',
            store : 'Speaker',
            flex : 1,
            height : 450,
            striped : true,
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
            cls: 'speakers-list',
            itemTpl : '{name}<br /><span class="speaker-job">{job_title}</span>',
            store : 'Speaker',
            flex : 1,
            height : 450,
            striped : true,
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
