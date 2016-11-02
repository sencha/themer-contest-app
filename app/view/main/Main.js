/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('ThemerContestApp.view.main.Main', {
    extend : 'Ext.Container',
    xtype : 'main',
    reference : 'main',
    controller : 'main',
    viewModel : 'main',
    listeners : {
        render : 'onMainViewRender'
    },
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
            style : {
                backgroundColor : '#5fa2dd',
                color : 'white',
                fontWeight : 'bold'
            },
            padding : '15 0 0 10',
            items : [
                {
                    html : 'Conference Manager Pro'
                }
            ]
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
