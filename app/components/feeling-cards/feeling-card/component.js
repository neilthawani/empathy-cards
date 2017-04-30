import Ember from 'ember';

export default Ember.Component.extend({
    feeling: null,
    index: null,
    indexToDisplay: null,

    showCard: Ember.computed('index', 'indexToDisplay', function() {
        return this.get('index') === this.get('indexToDisplay');
    }),

    actions: {
        selectCard: function() {
            this.sendAction('selectCard', this.get('feeling'));
        },
        discardCard: function() {
            this.sendAction('discardCard', this.get('feeling'));
        }
    },

    gestures: {
        swipeLeft: function(event) {
            console.log("left");
            // do something like send an event down the controller/route chain
            return false; // return `false` to stop bubbling
        },
        swipeRight: function(event) {
            console.log("right");
            /* ... */
        }
    }
});
