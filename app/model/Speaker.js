/**
 * Speaker model class
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.model.Speaker', {
    extend : 'Ext.data.Model',
    fields : [
        {"name" : "name"},
        {"name" : "job_title"},
        {"name" : "company"},
        {"name" : "session_title"},
        {"name" : "session_description"},
        {"name" : "bio"},
        {"name" : "photo"},
        {"name" : "time"},
        {"name" : "date"}
    ],
    proxy : {
        type : 'ajax',
        url : '../resources/data/speaker-session.json',
        reader : 'json'
    }
})