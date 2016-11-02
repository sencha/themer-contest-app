Ext.define('ThemerContestApp.view.main.SpeakerDetail', {
    extend : 'Ext.tab.Panel',
    xtype : 'speakerdetail',
    reference : 'speakerdetail',
    tabBarPosition : 'bottom',
    items : [
        {
            title : 'Bio',
            tpl : '<font style="font-weight:900;font-size:18px;">{name}</font><br /><font style="color:#404040">{job_title}</font><hr />{bio}',
            itemId : 'bioCard',
            reference : 'bioCard'
        },
        {
            title : 'Session',
            tpl : '<font style="font-weight:900;font-weight:16px">{session_title}</font><br />By {name}<hr />{session_description}',
            itemId : 'sessionCard',
            reference : 'sessionCard'
        }
    ]
})