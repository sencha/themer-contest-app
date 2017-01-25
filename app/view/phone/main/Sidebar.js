/**
 * Sidebar view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Sidebar', {
    extend : 'Ext.Menu',
    xtype : 'sidebar',
    ui:'phone-sidebar-panel',
    // defaults : {
    //     margin : '10 0'
    // },
    items : [
        {
            text : 'Dashboard',
            iconCls : 'x-fa fa-dashboard',
            ui:'phone-sidebar-dashboard-button',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Speakers',
            iconCls : 'x-fa fa-users',
            ui:'phone-sidebar-speakers-button',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Events',
            iconCls : 'x-fa fa-users',
            ui:'phone-sidebar-events-button',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Attendees',
            iconCls : 'x-fa fa-users',
            ui:'phone-sidebar-attendees-button',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        }
    ]
});
