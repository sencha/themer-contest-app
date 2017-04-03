/**
 * Speaker detail view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.SpeakerDetail', {
    extend : 'Ext.tab.Panel',
    xtype : 'speakerdetail',
    ui : 'speakers-tabs',
    cls : 'speakers-tabs',
    reference : 'speakerdetail',
    tabBarPosition : 'bottom',
    items : [
        {
            title : 'Bio',
            cls: 'speaker-tab',
            iconCls : 'x-fa fa-graduation-cap',
            tpl : '<span class="speaker-name">{name}</span><br /><span class="speaker-title">{job_title}</span><hr /><span class="speaker-desc">{bio}</span>',
            itemId : 'bioCard',
            reference : 'bioCard'
        },
        {
            title : 'Session',
				   	cls: 'speaker-tab',
            iconCls : 'x-fa fa-bell-o',
            tpl : '<span class="speaker-name">{session_title}</span><br /><span class="speaker-title">By {name}</span><hr /><span class="speaker-desc">{session_description}</span>',
            itemId : 'sessionCard',
            reference : 'sessionCard'
        }
    ]
})
