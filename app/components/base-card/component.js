// TODO: Download a CSS reference book to do transition events.

import Ember from 'ember';

export default Ember.Component.extend({
	card: null,
    cardType: "",
	
    index: null,
    indexToDisplay: null,

    showCard: Ember.computed('index', 'indexToDisplay', function() {
        return this.get('index') === this.get('indexToDisplay');
    }),

    actions: {
        selectCard: function() {
            this.sendAction('selectCard', this.get('card'));
        },
        discardCard: function() {
            this.sendAction('discardCard', this.get('card'));
        }
    },

    gestures: {
        swipeLeft: function(event) {
            this.send('discardCard');
            // return false; // return `false` to stop bubbling
        },
        swipeRight: function(event) {
            this.send('selectCard');
        }
    }
});