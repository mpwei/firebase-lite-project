import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import './vendor.js'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Progress Bar
Vue.use(VueProgressBar, {
	color: '#555',
	failedColor: 'red',
	thickness: '3px',
	transition: {
		speed: '0.2s',
		opacity: '0.3s',
		termination: 500
	},
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')