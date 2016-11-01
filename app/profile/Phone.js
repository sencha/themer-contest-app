Ext.define('ThemerContestApp.profile.Phone', {
	extend: 'Ext.app.Profile',

	views: {
		main: 'ThemerContestApp.view.phone.main.Main',
		dashboard : 'ThemerContestApp.view.phone.main.Dashboard',
		menu : 'ThemerContestApp.view.phone.main.Sidebar'
	},

	isActive: function () {
		return Ext.platformTags.phone;
	}
});