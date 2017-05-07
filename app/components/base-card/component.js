// TODO: Download a CSS reference book to do transition events.

import Ember from 'ember';
import KeyboardBindings from 'empathy-cards/mixins/keyboard-bindings';

export default Ember.Component.extend(KeyboardBindings, {
    classNames: ["selectable-card-container"],
	card: null,
    cardType: "",
	
    index: null,
    indexToDisplay: null,

    showCard: Ember.computed('index', 'indexToDisplay', function() {
        return this.get('index') === this.get('indexToDisplay');
    }),

    keydownBindings: function(event) {
        switch (event.keyCode) {
            case (37): // Left Arrow
                event.preventDefault();
                this.send('discardCard');
                break;
            case (39): // Right Arrow
                event.preventDefault();
                this.send('selectCard');
                break;
        }
    },

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