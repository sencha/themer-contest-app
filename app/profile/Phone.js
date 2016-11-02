/**
 * Phone profile
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.profile.Phone', {
	extend: 'Ext.app.Profile',
	
	// phone views
	views: {
		main: 'ThemerContestApp.view.phone.main.Main',
		dashboard : 'ThemerContestApp.view.phone.main.Dashboard',
		menu : 'ThemerContestApp.view.phone.main.Sidebar',
		events : 'ThemerContestApp.view.phone.main.Events',
		attendees : 'ThemerContestApp.view.phone.main.Attendees'
	},

	/**
	 * @method
	 * Check if phone profile is active
	 */
	isActive: function () {
		return Ext.platformTags.phone;
	}
});