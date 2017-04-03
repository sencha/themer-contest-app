/**
 * DaysToConference view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.DaysToConference', {
    extend : 'Ext.Panel',
    xtype : 'confdays',
    ui: 'days-to-conference',
    iconCls : 'x-fa fa-calendar',
    header : true,
    border : true,
    title : 'Days To Conference',
    layout : {
        type : 'hbox',
        align : 'center',
        pack : 'center'
    },
    items : [
        {
            html : '<span class="days-to-conference">14</span>'
        }
    ]
})
