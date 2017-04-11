import Ember from 'ember';
import Feelings from 'empathy-cards/static_data/feelings';
import Needs from 'empathy-cards/static_data/needs';

export default Ember.Controller.extend({
    feelings: Feelings,
    needs: Needs,

    shuffle: function(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    shuffledFeelings: Ember.computed('feelings', function() {
    	var feelings = this.get('feelings') || [];
    	
    	return this.shuffle(feelings);
    }),
    shuffledNeeds: Ember.computed('needs', function() {
    	var needs = this.get('needs') || [];

    	return this.shuffle(needs);
    }),

    showSituationTextarea: true,
    showFeelingCards: false,
    showNeedCards: false,
    showSummary: false,

    situation: null,
    showSituation: false,
    selectedFeelingCards: null,
    showSelectedFeelingCards: Ember.computed('showFeelingCards', 'selectedFeelingCards', function() {
    	return !this.get('showFeelingCards') && this.get('selectedFeelingCards');
    }),
    selectedNeedCards: null,
    showSelectedNeedCards: Ember.computed('showNeedCards', 'selectedNeedCards', function() {
    	return !this.get('showNeedCards') && this.get('selectedNeedCards');
    }),

    actions: {
        displayFeelingCards: function() {
            this.toggleProperty('showSituation');
            this.toggleProperty('showFeelingCards');
        },
        displayNeedCards: function(selectedFeelingCards) {
        	this.set('selectedFeelingCards', selectedFeelingCards);
        	this.toggleProperty('showSelectedFeelingCards');
        	this.toggleProperty('showNeedCards');
        },
        displaySummary: function(selectedNeedCards) {
        	this.set('selectedNeedCards', selectedNeedCards);
        	this.toggleProperty('showSelectedNeedCards');
        	this.toggleProperty('showSummary');
        }
    }
});
