Ext.define('ThemerContestApp.store.Event', {
    extend : 'Ext.data.Store',
    autoLoad : true,
    model : 'ThemerContestApp.model.Event',
    storeId : 'Event',
    sorters : [
        {
            property : 'title',
            direction : 'ASC'
        }
    ]
});