/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ThemerContestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    listen : {
        controller : {
            '#' : {
                unmatchedRoute : 'onRouteChange'
            }
        }
    },
    control : {
        '#' : {
            menuitemselect : 'onMenuItemSelect',
            speakerselect : 'onSpeakerSelect'
        }
    },

    lastView : null,
    routes : {
        ':node' : 'onRouteChange'
    },

    platformConfig: {
		phone: {
			platform: 'phone'
		}
	}, 
    init : function () {
        if (this.platform !== 'phone') {
            var navigation = this.lookupReference('navigation');
            var store = navigation.getStore();
            var node = store.findNode('xtype', 'dashboard');
            navigation.setSelection(node);
        } 
    },
    onSelectionChange : function (tree, node) {
        var to = node && node.get('xtype');
        if (to) {
            this.redirectTo (to);
        }
    },
    
    onMainViewRender : function () {
        console.log('view rendered');
    },
    setCurrentView : function (xtype) {
        if (this.platform !== 'phone') {
            var refs = this.getReferences();
            this.contentCard = refs.contentCard;
            this.navigation = refs.navigation;

            var node = this.navigation.getStore().findNode('xtype', xtype);
            item = this.contentCard.child('component[xtype=' + xtype + ']');
            if (xtype === 'dashboard') {
                item = this.contentCard.add({
                    xtype : xtype
                });
            } else {
                item = this.contentCard.add({xtype : xtype});
            }
            this.contentCard.setActiveItem(xtype);
            this.navigation.setSelection(node);
        }
    },

    setPhoneView : function (xtype) {
        if (this.platform === 'phone') {
            item = this.contentCard.child('component[xtype=' + xtype + ']');
            this.contentCard.setActiveItem(xtype);
            this.phoneBar.setTitle(xtype.toUpperCase());
            Ext.Viewport.toggleMenu('left');
            var refs = this.getReferences();
        }
    },

    onRouteChange : function (id) {
        this.setCurrentView(id);
    },

    onMenuItemSelect : function (btn) {
        var item = btn.getText().toLowerCase();
        this.setPhoneView(item);
    },

    onPhoneViewRender : function (pnl) {
        var refs = this.getReferences();
        this.contentCard = refs.contentCard;
        this.phoneBar = refs.phonebar;

        var item = this.contentCard.add({
            xtype : 'dashboard'
        });
        this.phoneBar.setTitle('DASHBOARD');
        this.contentCard.setActiveItem(item);
    },

    onSpeakerSelect : function (record, btn) {
        console.log('speaker selected');
        if (!this.speakerDetail) {
            this.speakerDetail = this.contentCard.add({
                xtype : 'speakerdetail'
            });
        }

        this.contentCard.setActiveItem(this.speakerDetail);
        var refs = this.getReferences();
        var bioCard = refs.bioCard;
        var sessionCard = refs.sessionCard;

        bioCard.setData({
                            name : record.get('name'),
                            job_title : record.get('job_title'),
                            bio : record.get('bio')
                        });
        sessionCard.setData({
                            session_title : record.get('session_title'),
                            name : record.get('name'),
                            session_description : record.get('session_description')
                        });
        
    }
});
