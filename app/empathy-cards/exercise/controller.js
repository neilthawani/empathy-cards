import Ember from 'ember';
import Feelings from 'bepeace/static_data/feelings';
import Needs from 'bepeace/static_data/needs';

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

    shuffledFeelings: Ember.computed("feelings", function() {
    	var feelings = this.get("feelings") || [];
    	
    	return this.shuffle(feelings);
    }),
    shuffledNeeds: Ember.computed("needs", function() {
    	var needs = this.get("needs") || [];

    	return this.shuffle(needs);
    }),

    showFeelingCards: false,
    showNeedCards: false,

    situation: null,
    selectedFeelingCards: null,

    actions: {
        displayFeelingCards: function() {
            this.toggleProperty('showFeelingCards');
        },
        displayNeedCards: function(selectedFeelingCards) {
        	this.set('selectedFeelingCards', selectedFeelingCards);
        	this.toggleProperty('showNeedCards');
        }
    }
});
