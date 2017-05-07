import Ember from 'ember';

const increment = function(params) {
	return params[0] + 1;
};

export default Ember.Helper.helper(increment);
