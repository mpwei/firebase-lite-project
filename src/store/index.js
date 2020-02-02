import Vue from 'vue'
import Vuex from 'vuex'
import {analytics, firestore, storage} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        language: 'zh-tw',
        langDictionary: {
            'en': {
                message: {
                    hello: 'hello world',
                    greeting: 'good morning'
                }
            },
            'ja': {
                message: {
                    hello: 'こんにちは、世界',
                    greeting: 'おはようございます'
                }
            },
            'zh-tw': {
                message: {
                    hello: '你好',
                    greeting: '哈囉'
                }
            },
            'zh-cn': {
                message: {
                    hello: '你好2',
                    greeting: '雷侯'
                }
            },
        },
        database: firestore,
        storage: storage,
        analytics: analytics,
        loading: false,
        profile: {
            logo: '',
            menu: [],
            website: [],
        }
    },
    mutations: {
    },
    actions: {
        LoadLanguage(_Context, _Language = null) {
            _Context.state.language = _Language
            if (!(_Context.state.langDictionary[_Context.state.language])) {
                return _Context.state.langDictionary[_Context.state.language]().then(Messages => {
                    _Context.state.langDictionary[_Context.state.language] = Messages
                })
            }
        },
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
        GetWebsiteConfig(_Context) {
            return new Promise((_Resolve, _Reject) => {
                _Context.state.database.collection('Config').doc('Website').get().then(_Response => {
                    _Context.state.profile.website = _Response.data()
                    _Resolve()
                }).catch(function (_Error) {
                    _Reject(_Error)
                })
            })
        },
        GetLogo(_Context) {
            return new Promise((_Resolve, _Reject) => {
                _Context.state.profile.logo = 'images/logo_icon.png'
                _Context.state.storage.ref().child(_Context.state.profile.logo).getDownloadURL().then(URL => {
                    _Context.state.profile.logo = URL
                    _Resolve()
                }).catch(_Error => {
                    _Reject(_Error)
                })
            })
        },
        GetMenu(_Context) {
            return new Promise((_Resolve, _Reject) => {
                _Context.state.profile.menu = []
                _Context.state.database.collection('Menu').where('Open', '==', true).orderBy('No', 'asc').get().then(_Response => {
                    _Response.forEach(doc => {
                        _Context.state.profile.menu.push(doc.data())
                    })
                    _Resolve()
                }).catch(function (_Error) {
                    _Reject(_Error)
                })
            })
        }
    },
    modules: {}
})