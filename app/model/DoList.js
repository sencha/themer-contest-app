/**
 * DoList model class
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.model.DoList', {
    extend : 'Ext.data.Model',
    fields : [
        {
            name : 'name'
        },
        {
            name : 'done'
        }
    ],
    proxy : {
        type : 'ajax',
        url : '../resources/data/dolist.json',
        reader : {
            type : 'json'
        }
    }
});