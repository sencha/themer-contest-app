/**
 * DaysToConference view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.DaysToConference', {
	extend: 'Ext.Panel',
	xtype : 'confdays',

	requires: [
		'Ext.layout.HBox'
	],

	ui     : 'days-to-conference',
	header : true,
	border : true,
	title  : 'Days To Conference',
	iconCls: 'fa fa-clock-o',
	layout : {
		type : 'hbox',
		align: 'center',
		pack : 'center'
	},
	html   : '14'
})
