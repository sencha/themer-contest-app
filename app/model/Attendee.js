/**
 * Attendees model class
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.model.Attendee', {
    extend : 'Ext.data.Model',
    fields : [
        {
            name : 'name'
        },
        {
            name : 'title',
            mapping : 'job_title'
        },
        {
            name : 'company'
        },
        {
            name : 'email'
        }
    ],
    
    proxy : {
        type : 'ajax',
        url : '../resources/data/attendees.json',
        reader : 'json'
    }
});