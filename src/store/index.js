import Vue from 'vue'
import Vuex from 'vuex'
import Firestore from '../firestore'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        database: Firestore
    },
    mutations: {},
    actions: {},
    modules: {}
})