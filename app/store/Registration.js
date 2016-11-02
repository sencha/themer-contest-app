Ext.define('ThemerContestApp.store.Registration', {
    extend : 'Ext.data.Store',
    autoLoad : true,
    model : 'ThemerContestApp.model.Registration',
    storeId : 'Registration',
    sorters : [
        {
            property : 'name',
            direction : 'ASC'
        }
    ]
});