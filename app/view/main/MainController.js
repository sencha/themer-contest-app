/**
 * Main ViewController
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
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
    // custom events
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

    /**
     * @method
     * init method. sets a default card.
     */
    init : function () {
        if (this.platform !== 'phone') {
            var navigation = this.lookupReference('navigation');
            var store = navigation.getStore();
            var node = store.findNode('xtype', 'dashboard');
            navigation.setSelection(node);
        } 
    },

    /**
     * @method
     * Responds to navigation tree node selection.
     * @param {Ext.list.Tree} tree - navigation tree
     * @param {Object} node - selected tree node
     */
    onSelectionChange : function (tree, node) {
        var to = node && node.get('xtype');
        if (to) {
            this.redirectTo (to);
        }
    },
    
    /**
     * @method
     * Sets current view in the card
     * @param {string} xtype - component to be activated
     */
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

    /**
     * @method
     * Sets phone view
     * @param {string} xtype - phone view component to be activated
     */
    setPhoneView : function (xtype) {
        if (this.platform === 'phone') {
            item = this.contentCard.child('component[xtype=' + xtype + ']');
            this.contentCard.setActiveItem(xtype);
            this.phoneBar.setTitle(xtype.toUpperCase());
            Ext.Viewport.toggleMenu('left');
            var refs = this.getReferences();
        }
    },

    /**
     * @method
     * Listens for route change
     * @param {string} id - component xtype
     */
    onRouteChange : function (id) {
        this.setCurrentView(id);
    },

    /**
     * @method
     * Responds to phone menu item selection
     * @param {Ext.Button} button - clicked menu button reference
     */
    onMenuItemSelect : function (btn) {
        var item = btn.getText().toLowerCase();
        this.setPhoneView(item);
    },

    /**
     * @method
     * Sets default view for the phones
     */
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

    /**
     * @method
     * Listens to speaker selection from list. Adds speaker detail tab panel to the card and updates bio / session templates.
     * @param {Object} record - selected list record
     * @param {Ext.Button} btn - item disclosure button
     */
    onSpeakerSelect : function (record, btn) {
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
