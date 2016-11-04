/**
 * Main view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Main', {
    extend : 'Ext.Container',
    xtype : 'main',
    reference : 'main',
    controller : 'main',
    viewModel : 'main',
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    itemId : 'app-main',
    items : [
      {
          xtype : 'container',
          docked : 'top',
          height : 50,
          items : [
            {
                xtype : 'titlebar',
                ui : 'main-header',
                title : 'Conference Manager Pro',
                docked : 'top',
                titleAlign : 'left',
                height : 50,
                scrollable : {
                  y: false
                }

            }]
      },
        {
            xtype : 'sidebar',
            docked : 'left'
        },
        {
            xtype : 'content',
            reference : 'contentCard',
            flex : 1
        }
    ]
});
