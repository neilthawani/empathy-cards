import Ember from 'ember';

export default Ember.Component.extend({
    needs: null,
    indexToDisplay: 0,

    selectedCards: [],
    discardedCards: [],

    actions: {
    	selectCard: function(feeling) {
    		var selectedCards = this.get('selectedCards');
    		selectedCards.push(feeling);
    		this.set('selectedCards', selectedCards);

    		this.incrementProperty('indexToDisplay');

    		if (this.get('indexToDisplay') === (this.get('needs').length)) {
    			this.send('displaySummary');
			}
    	},
    	discardCard: function(feeling) {
    		var discardedCards = this.get('discardedCards');
    		discardedCards.push(feeling);
    		this.set('discardedCards', discardedCards);

    		this.incrementProperty('indexToDisplay');

    		if (this.get('indexToDisplay') === (this.get('needs').length)) {
    			this.send('displaySummary');
			}
    	},
    	displaySummary: function() {
    		this.sendAction('displaySummary', this.get('selectedCards'));
    	}
    }
});
