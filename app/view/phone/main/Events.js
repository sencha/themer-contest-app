/**
 * Events view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Events', {
    extend : 'Ext.grid.Grid',
    store : 'Event',
    xtype : 'events',
    requires : ['Ext.grid.plugin.RowExpander'],
    hideHeaders: true,
    columns : [
        {
            text : 'Session Title',
            dataIndex : 'title',
            flex : 1
        }
    ],
    plugins : {
        type : 'gridrowexpander'
    },
    itemConfig : {
        body : {
            tpl : [
                '{time}<br />',
                '{location}<br />'
            ]
        }
    }
    
});