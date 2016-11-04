/**
 * Main view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
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
    itemId : 'app-main',
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
                    ui : 'phone-toolbar',
                    reference : 'phonebar',
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
    }
});
