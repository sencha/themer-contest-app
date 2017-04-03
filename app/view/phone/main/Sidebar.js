/**
 * Sidebar view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Sidebar', {
    extend : 'Ext.Menu',
    cls: 'phone-sidebar',
    xtype : 'sidebar',
    items : [
        {
            text : 'Dashboard',
            iconCls : 'x-fa fa-dashboard',
            ui: 'phone-menu-button',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Speakers',
            iconCls : 'x-fa fa-bullhorn',
            ui: 'phone-menu-button',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Events',
            iconCls : 'x-fa fa-bolt',
            ui: 'phone-menu-button',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        },
        {
            text : 'Attendees',
            iconCls : 'x-fa fa-users',
            ui: 'phone-menu-button',
            handler : function (btn) {
                var panel = Ext.Viewport.down('panel');
                panel.fireEvent('menuitemselect', btn);
            }
        }
    ]
});
