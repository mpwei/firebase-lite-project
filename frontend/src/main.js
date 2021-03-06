import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import swalPlugin from './plugins/SweetAlert2'
import language from './language'
import VueProgressBar from 'vue-progressbar'
import VueLazyload from 'vue-lazyload'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueMoment from 'vue-moment'
import './vendor.js'
import './function.js'

// Set Language
store.commit('SetLanguage')

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Progress Bar
Vue.use(VueProgressBar, {
	color: '#ffc107',
	failedColor: 'red',
	thickness: '3px',
	transition: {
		speed: '0.4s',
		opacity: '0.6s',
		termination: 500
	},
})

Vue.component('Loading', () => import("./components/Common/Loading"))
Vue.component('ContentWrapper', () => import("@/components/Layout/ContentWrapper"))

Vue.use(VueMoment)
Vue.use(swalPlugin)
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	i18n: language,
	render: h => h(App)
}).$mount('#app')