import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.route('empathy-cards', function() {
		this.route('instructions');
        this.route('exercise');
    });    
});

export default Router;
