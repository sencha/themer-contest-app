Ext.define('ThemerContestApp.profile.Phone', {
	extend: 'Ext.app.Profile',

	views: {
		main: 'ThemerContestApp.view.phone.main.Main',
		dashboard : 'ThemerContestApp.view.phone.main.Dashboard'
	},

	isActive: function () {
		return Ext.platformTags.phone;
	}
});