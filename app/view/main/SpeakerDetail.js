/**
 * Speaker detail view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.SpeakerDetail', {
    extend : 'Ext.tab.Panel',
    xtype : 'speakerdetail',
    ui : 'speakers-tabs',
    reference : 'speakerdetail',
    tabBarPosition : 'bottom',
    items : [
        {
            title : 'Bio',
            padding: '20 10 10 10',
            iconCls : 'x-fa fa-graduation-cap',
            tpl : '<div class="speaker-detail-bio-name">{name}</div><div class="speaker-detail-bio-job">{job_title}</div><hr /><div class="speaker-detail-bio-bio">{bio}</div>',
            itemId : 'bioCard',
            reference : 'bioCard'
        },
        {
            title : 'Session',
            padding: '20 10 10 10',
            iconCls : 'x-fa fa-bell-o',
            tpl : '<div class="speaker-detail-session-title">{session_title}</div><div class="speaker-detail-session-name">By {name}</div><hr /><div class="speaker-detail-session-description">{session_description}</div>',
            itemId : 'sessionCard',
            reference : 'sessionCard'
        }
    ]
})
