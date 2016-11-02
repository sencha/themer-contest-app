/**
 * Speaker store
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.store.Speaker', {
    extend : 'Ext.data.Store',
    autoLoad : true,
    model : 'ThemerContestApp.model.Speaker',
    storeId : 'Speaker',
    sorters : [
        {
            property : 'name',
            direction : 'ASC'
        }
    ]
});