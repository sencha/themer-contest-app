/**
 * Dashboard view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Dashboard', {
	extend: 'Ext.Container',
	xtype : 'dashboard',

	requires: [
		'Ext.layout.HBox',
		'Ext.layout.VBox'
	],

	scrollable: true,
	layout    : {
		type: 'vbox'
	},
	items     : [
		{
			xtype : 'confdays',
			height: 400
			// flex : 2
		},
		{
			xtype      : 'registrations',
			title      : 'New Registrations',
			iconCls: 'fa fa-user-plus',
			hideHeaders: true,
			height     : 400,
			cls        : 'bg'
			// flex : 2
		},
		{
			xtype      : 'events',
			title      : 'All Events',
			hideHeaders: true,
			height     : 400,
			iconCls: 'fa fa-calendar',
			cls        : 'bg'
			// flex : 2
		},
		{
			xtype : 'dolist',
			header: true,
			title : 'To Do List',
			height: 400,
			cls   : 'bg'
			// flex : 2
		},
		{
			xtype : 'panel',
			ui    : 'total-registrations',
			header: true,
			height: 400,
			title : 'Total Registrations',
			layout: {
				type : 'hbox',
				align: 'center',
				pack : 'center'
			},
			// flex : 2,
			items : [
				{
					xtype: 'progress',
					value: 0.75,
					text : '736/1000 Registered',
					width: 250
				}
			]
		}
	]
})
