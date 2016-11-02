Ext.define('ThemerContestApp.model.Event', {
    extend : 'Ext.data.Model',
    fields : [
        {
            name : 'title'
        },
        {
            name : 'track'
        },
        {
            name : 'time'
        },
        {
            location : 'location'
        }
    ],
    proxy : {
        type : 'ajax',
        url : '../resources/data/events.json',
        reader : 'json'
    }
});