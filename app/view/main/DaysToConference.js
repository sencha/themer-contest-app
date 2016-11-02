/**
 * DaysToConference view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.DaysToConference', {
    extend : 'Ext.Panel',
    xtype : 'confdays',
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
            html : '14',
            style : {
                fontWeight : 900,
                fontSize : '38px'
            }
        }
    ]
})