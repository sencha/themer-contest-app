/**
 * Content view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Content', {
    extend : 'Ext.Container',
    xtype : 'content',
    layout : {
        type : 'card',
        animation : {
            duration : 300,
            easing : 'ease-out',
            type : 'slide',
            direction : 'right'
        }
    }
})