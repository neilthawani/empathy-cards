import Ember from 'ember';

export default Ember.Component.extend({
	situation: null,
	showSituation: false,

	actions: {
		displayFeelingCards: function() {
			this.sendAction('displayFeelingCards');
		}
	}
});