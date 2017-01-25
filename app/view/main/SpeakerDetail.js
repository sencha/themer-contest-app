/**
 * Speaker detail view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.SpeakerDetail', {
    extend : 'Ext.tab.Panel',
    xtype : 'speakerdetail',
    reference : 'speakerdetail',
    tabBarPosition : 'bottom',
    tabBar: {
        "ui": "speaker-tabs"
    },
    items : [
        {
            title : 'Bio',
            xtype: 'panel',
            iconCls : 'x-fa fa-graduation-cap',
            tpl : '<span style="font-weight:900;font-size:18px;margin:10px;">{name}</span><br /><span style="color:#404040;margin:10px;">{job_title}</span><hr /><span style="padding:10px;display:block">{bio}</span>',
            itemId : 'bioCard',
            reference : 'bioCard',
            ui : 'bio-tab'
        },
        {
            title : 'Session',
            xtype: 'panel',
            iconCls : 'x-fa fa-bell-o',
            tpl : '<span style="font-weight:900;font-size:18px;margin:10px;">{session_title}</span><br /><span style="color:#404040;margin:10px;">By {name}</span><hr /><span style="padding:10px;display:block">{session_description}</span>',
            itemId : 'sessionCard',
            reference : 'sessionCard',
            ui : 'session-tab'

        }
    ]
})
