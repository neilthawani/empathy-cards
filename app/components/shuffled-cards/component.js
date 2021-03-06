import Ember from 'ember';

export default Ember.Component.extend({
    isMobile: false,
    cards: null,
    cardType: "",
    showSelectedCards: false,

    indexToDisplay: 0,

    selectedCards: [],
    discardedCards: [],

    init: function() {
        this._super();
        this.set('selectedCards', []);
    },

    actions: {
        selectCard: function(index) {
            var card = this.get('cards') && this.get('cards')[index],
                selectedCards = this.get('selectedCards');

            selectedCards.push(card);
            this.set('selectedCards', selectedCards);

            this.incrementProperty('indexToDisplay');

            if (this.get('indexToDisplay') === (this.get('cards').length)) {
                this.send('displayNextStep');
            }
        },
        discardCard: function(index) {
            var card = this.get('cards') && this.get('cards')[index],
                discardedCards = this.get('discardedCards');
                
            discardedCards.push(card);
            this.set('discardedCards', discardedCards);

            this.incrementProperty('indexToDisplay');

            if (this.get('indexToDisplay') === (this.get('cards').length)) {
                this.send('displayNextStep');
            }
        },
        displayNextStep: function() {
            this.sendAction('displayNextStep', this.get('selectedCards'));
        }
    }
});
