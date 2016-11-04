/**
 * Sidebar view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Sidebar', {
    extend : 'Ext.Menu',
    xtype : 'sidebar',
    // defaults : {
    //     margin : '10 0'
    // },
    items : [
        {
            text : 'Dashboard',
            iconCls : 'x-fa fa-dashboard',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Speakers',
            iconCls : 'x-fa fa-users',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Events',
            iconCls : 'x-fa fa-users',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Attendees',
            iconCls : 'x-fa fa-users',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        }
    ]
});
