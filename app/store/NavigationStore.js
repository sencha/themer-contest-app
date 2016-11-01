Ext.define('ThemerContestApp.store.NavigationStore', {
	extend : 'Ext.data.TreeStore',
	storeId : 'NavigationStore',
	fields : [{
		name : 'text'
	}],
	root : {
		expanded : true,
		children : [
			{
				text : 'Dashboard',
				iconCls : 'x-fa fa-desktop',
				xtype : 'dashboard',
				routeId : 'dashboard',
				leaf : true
			},
			{
				text : 'Speakers',
				iconCls : 'x-fa fa-users',
				xtype : 'speakers',
				leaf : true
			}
		]
	}
})