Ext.define('ThemerContestApp.profile.Tablet', {
	extend: 'Ext.app.Profile',

	views: {
		main: 'ThemerContestApp.view.main.Main',
		dashboard : 'ThemerContestApp.view.main.Dashboard'
	},

	isActive: function () {
		return !Ext.platformTags.phone;
	}
});