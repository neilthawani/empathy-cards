import Ember from 'ember';

export default Ember.Component.extend({
    isMobile: false,
    cards: null,
    cardType: "",
    showSelectedCards: false,
    
    indexToDisplay: 0,

    selectedCards: [],
    discardedCards: [],

    actions: {
    	selectCard: function(card) {
    		var selectedCards = this.get('selectedCards');
    		selectedCards.push(card);
    		this.set('selectedCards', selectedCards);

    		this.incrementProperty('indexToDisplay');

    		if (this.get('displayNextStep') === (this.get('cards').length)) {
    			this.send('displayNeedCards');
			}
    	},
    	discardCard: function(card) {
    		var discardedCards = this.get('discardedCards');
    		discardedCards.push(card);
    		this.set('discardedCards', discardedCards);

    		this.incrementProperty('indexToDisplay');

    		if (this.get('indexToDisplay') === (this.get('cards').length)) {
    			this.send('displayNextStep');
			}
    	},
    	displayNextStep: function() {
            var cardType = this.get('cardType');

            if (cardType === 'feelings') {
                this.sendAction('displayNeedCards', this.get('selectedCards'));
            } else if (cardType === 'needs') {
                this.sendAction('displaySummary');
            }
    	}
    }
});
