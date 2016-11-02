/**
 * Attendees store
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
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