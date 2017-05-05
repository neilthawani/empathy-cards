import Ember from 'ember';

const singularize = function(params) {
	return params[0].slice(0, params[0].length - 1);
};

export default Ember.Helper.helper(singularize);
