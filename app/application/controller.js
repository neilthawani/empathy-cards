import Ember from 'ember';

export default Ember.Controller.extend({
    isMobile: Ember.computed(function() {
    	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }),
});