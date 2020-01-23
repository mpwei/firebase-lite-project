import Vue from 'vue'
import Vuex from 'vuex'
import database from '../firestore'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		Get(_Context, _Collection) {
			return new Promise((_Resolve, _Reject) => {
				let array = [];
				database.collection(_Collection).get().then(querySnapshot => {
					querySnapshot.forEach(doc => {
						array[doc.id] = doc.data().Url
					});
					_Resolve(array)
				}).catch((_Error) => {
					_Reject({
						'Message': _Error
					})
				});
			})
		}
	},
	modules: {}
})