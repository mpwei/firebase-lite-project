import Vue from 'vue'
import Vuex from 'vuex'
import {analytics, firestore, storage, auth} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        language: 'zh-tw',
        allowLang: ['zh-tw', 'en-us'],
        langDictionary: [],
        langFile: [],
        database: firestore,
        storage: storage,
        auth: auth,
        analytics: analytics,
        loading: false,
        profile: {
            logo: '',
            menu: [],
            website: {
                Designer: [],
                Subtitle: [],
                Title: [],
                Year: 1970
            },
        }
    },
    mutations: {
        SetLanguage(_State) {
            //取使用者環境
            let CustomLocale = (navigator.language || navigator.browserLanguage).toLowerCase()
            if (_State.allowLang.includes(CustomLocale)) {
                _State.language = CustomLocale
            }

            //載入語系列表
            let AllowLanguage = JSON.parse(JSON.stringify(_State.allowLang))
            AllowLanguage.forEach(_Language => {
                _State.langFile[_Language] = () => import('../language/dictionary/' + _Language)
            })

            //載入預設語系
            this.dispatch("LoadLanguage")
        },
    },
    actions: {
        LoadLanguage(_Context, _Language = null) {
            if (_Language) {
                if (_Context.state.allowLang.includes(_Language)) {
                    _Context.state.language = _Language
                } else {
                    return false
                }
            }
            if (!(_Context.state.langDictionary[_Context.state.language])) {
                return _Context.state.langFile[_Context.state.language]().then(Messages => {
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
                    _Context.state.profile.website = {
                        Designer: _Response.data().Designer,
                        Subtitle: _Response.data().Subtitle,
                        Title: _Response.data().Title,
                        Year: _Response.data().Year
                    }
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