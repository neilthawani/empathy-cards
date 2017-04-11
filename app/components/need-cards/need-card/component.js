import Ember from 'ember';

export default Ember.Component.extend({
    need: null,
    index: null,
    indexToDisplay: null,

    showCard: Ember.computed('index', 'indexToDisplay', function() {
        return this.get('index') === this.get('indexToDisplay');
    }),

    actions: {
        selectCard: function() {
            this.sendAction('selectCard', this.get('need'));
        },
        discardCard: function() {
            this.sendAction('discardCard', this.get('need'));
        }
    }
});
