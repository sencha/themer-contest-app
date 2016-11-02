Ext.define('ThemerContestApp.profile.Phone', {
	extend: 'Ext.app.Profile',

	views: {
		main: 'ThemerContestApp.view.phone.main.Main',
		dashboard : 'ThemerContestApp.view.phone.main.Dashboard',
		menu : 'ThemerContestApp.view.phone.main.Sidebar',
		events : 'ThemerContestApp.view.phone.main.Events',
		attendees : 'ThemerContestApp.view.phone.main.Attendees'
	},

	isActive: function () {
		return Ext.platformTags.phone;
	}
});