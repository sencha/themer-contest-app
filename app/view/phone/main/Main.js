/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('ThemerContestApp.view.phone.main.Main', {
    //extend : 'Ext.tab.Panel',
    extend : 'Ext.Panel',
    xtype : 'main',
    reference : 'main',
    controller : 'main',
    viewModel : 'main',
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    listeners : {
        initialize : 'onPhoneViewRender'
    },
    constructor : function (config) {
        var me = this;
        var sidebar = new ThemerContestApp.view.phone.main.Sidebar();
        Ext.Viewport.setMenu(sidebar, {
            side : 'left',
            reveal : true
        });
        Ext.apply(config, {
            items : [
                {
                    xtype : 'toolbar',
                    reference : 'phonebar',
                    style : {
                        background : '#5fa2dd'
                    },
                    items : [
                        {
                            iconCls : 'x-fa fa-navicon',
                            handler : function () {
                                Ext.Viewport.toggleMenu('left');
                            }
                        }
                    ]
                },
                {
                    xtype : 'container',
                    layout : {
                        type : 'card',
                        animation : {
                            duration : 300,
                            easing : 'ease-out',
                            type : 'slide',
                            direction : 'right'
                        }
                    },
                    reference : 'contentCard',
                    flex : 1
                }
            ]
        });
        me.callParent(arguments);
    },
    /*items : [
        {
            xtype : 'toolbar',
            items : [
                {
                    iconCls : 'x-fa fa-navicon',
                    handler : function () {
                        Ext.Viewport.toggleMenu('left');
                    }
                }
            ],
            style : {
                background : '#5fa2dd'
            },
            reference : 'phonebar'
        },
        {
            xtype : 'panel',
            layout : {
                type : 'card'
            },
            reference : 'contentCard',
            items : [
                {
                    text : 'Dashboard'
                }
            ]
        }
    ]*/
    /*tabBarPosition : 'bottom',
    
    items : [
        {
            title : 'dashboard',
            xtype : 'dashboard',
            layout : {
                type : 'vbox',
                align : 'stretch'
            }
        },
        {
            title : 'Speakers',
            html : 'Speakers'
        }
    ]*/
});
