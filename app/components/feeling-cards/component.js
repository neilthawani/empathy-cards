import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['feeling-cards-container'],

    feelings: null,
    indexToDisplay: 0,

    selectedCards: [],
    discardedCards: [],

    actions: {
    	selectCard: function(feeling) {
    		var selectedCards = this.get('selectedCards');
    		selectedCards.push(feeling);
    		this.set('selectedCards', selectedCards);

    		this.incrementProperty('indexToDisplay');
    	},
    	discardCard: function(feeling) {
    		var discardedCards = this.get('discardedCards');
    		discardedCards.push(feeling);
    		this.set('discardedCards', discardedCards);

    		this.incrementProperty('indexToDisplay');
    	}
    }
});
