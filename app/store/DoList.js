/**
 * DoList store
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.store.DoList', {
    extend : 'Ext.data.Store',
    autoLoad : true,
    model : 'ThemerContestApp.model.DoList',
    storeId : 'DoList',
    sorters : [
        {
            property : 'name',
            direction : 'ASC'
        }
    ]
});