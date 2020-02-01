import Vue from 'vue'
import Vuex from 'vuex'
import {firestore, storage, analytics} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        database: firestore,
        storage: storage,
        analytics: analytics,
        loading: false,
        profile: {
            logo: 'images/logo_icon.png',
            menu: [],
            website: [],
        }
    },
    mutations: {},
    actions: {
        LoadingStart(_Context, _Root) {
            _Context.state.loading = true
            _Root.$Progress.start()
        },
        LoadingEnd(_Context, _Root) {
            _Context.state.loading = false
            _Root.$Progress.finish()
        },
        LoadingFail(_Context, _Root) {
            _Context.state.loading = false
            _Root.$Progress.fail()
        },
    },
    modules: {}
})