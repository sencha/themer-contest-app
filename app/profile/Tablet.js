/**
 * Tablet profile
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.profile.Tablet', {
	extend: 'Ext.app.Profile',

	// tablet views
	views: {
		main: 'ThemerContestApp.view.main.Main',
		dashboard : 'ThemerContestApp.view.main.Dashboard'
	},

	/**
	 * @method
	 * Check if tablet profile is active
	 */
	isActive: function () {
		return !Ext.platformTags.phone;
	}
});