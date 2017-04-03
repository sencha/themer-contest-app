/**
 * Dashboard view (tablet)
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Dashboard', {
	extend: 'Ext.Container',
	xtype : 'dashboard',

	requires: [
		'Ext.layout.Fit',
		'Ext.layout.HBox',
		'Ext.layout.VBox'
	],

	cls: 'dashboard',
	layout : {
		type : 'vbox',
		align: 'stretch'
	},
	items  : [
		{
			xtype : 'container',
			flex  : 1,
			layout: {
				type: 'hbox'
			},
			margin: '0 0 10 0',
			items : [
				{
					xtype: 'confdays',
					title: 'Days To Conference',
					width: '24%'
				},
				{
					xtype: 'spacer',
					width: '1%'
				},
				{
					xtype : 'panel',
					iconCls: 'fa fa-user-plus',
					ui    : 'new-registrations',
					width : '75%',
					title : 'New Registrations',
					border: true,
					layout: 'fit',
					items : [
						{
							xtype: 'registrations'
						}
					]
				}
			]
		},
		{
			xtype  : 'panel',
			ui     : 'all-events',
			flex   : 1,
			layout : {
				type: 'hbox'
			},
			margin : '0 0 10 0',
			title  : 'All Events',
			iconCls: 'fa fa-calendar',
			border : true,
			items  : [
				{
					xtype : 'events',
					header: true,
					width : '100%',
					border: true
				}
			]
		},
		{
			xtype : 'container',
			flex  : 1,
			layout: {
				type : 'hbox',
				align: 'stretch'
			},
			items : [
				{
					xtype  : 'panel',
					iconCls: 'fa fa-check-square',
					ui     : 'to-do-list',
					width  : '75%',
					title  : 'To Do List',
					border : true,
					layout : 'fit',
					items  : [
						{
							xtype: 'dolist'
						}
					]
				},
				{
					xtype: 'spacer',
					width: '1%'
				},
				{
					xtype : 'panel',
					ui    : 'total-registrations',
					iconCls: 'fa fa-users',
					width : '24%',
					header: true,
					title : 'Total Registrations',
					border: true,
					layout: {
						type : 'hbox',
						align: 'center',
						pack : 'center'
					},
					items : [
						{
							xtype: 'progress',
							ui   : 'progress-bar',
							value: 0.75,
							text : '736/1000 Registered',
							width: 250
						}
					]
				}
			]
		}

	]
})
