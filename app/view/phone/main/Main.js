/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('ThemerContestApp.view.phone.main.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'main',
    reference : 'main',
    controller : 'main',
    viewModel : 'main',
    tabBarPosition : 'bottom',
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
    ]
});
