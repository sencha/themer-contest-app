Ext.define('ThemerContestApp.store.Attendee', {
    extend : 'Ext.data.Store',
    autoLoad : true,
    model : 'ThemerContestApp.model.Attendee',
    storeId : 'Attendee',
    sorters : [
        {
            property : 'name',
            direction : 'ASC'
        }
    ]
});