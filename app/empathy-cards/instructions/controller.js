import Ember from 'ember';

export default Ember.Controller.extend({
    isMobile: false,

    init: function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.set("isMobile", true);
        }
    }
});
