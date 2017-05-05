import Ember from 'ember';

export default Ember.Component.extend({
    isMobile: false,
    feelings: null,
    showSelectedFeelingCards: false,
    
    indexToDisplay: 0,

    selectedCards: [],
    discardedCards: [],

    actions: {
    	selectCard: function(feeling) {
    		var selectedCards = this.get('selectedCards');
    		selectedCards.push(feeling);
    		this.set('selectedCards', selectedCards);

    		this.incrementProperty('indexToDisplay');

    		if (this.get('indexToDisplay') === (this.get('feelings').length)) {
    			this.send('displayNeedCards');
			}
    	},
    	discardCard: function(feeling) {
    		var discardedCards = this.get('discardedCards');
    		discardedCards.push(feeling);
    		this.set('discardedCards', discardedCards);

    		this.incrementProperty('indexToDisplay');

    		if (this.get('indexToDisplay') === (this.get('feelings').length)) {
    			this.send('displayNeedCards');
			}
    	},
    	displayNeedCards: function() {
    		this.sendAction('displayNeedCards', this.get('selectedCards'));
    	}
    }
});
