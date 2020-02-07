require('./bootstrap');

import Vue from 'vue';

/* Basic Element Components */
import navBar from './components/elements/NavBar.vue';
import dashboard from './components/elements/Dashboard.vue';

new Vue({
    el: '#app',
    components: { 
    	navBar, 
    	dashboard 
    }
});