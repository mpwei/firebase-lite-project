<template>
    <main class="bg-light">
        <Loading v-if="$store.state.loading"/>
        <vue-progress-bar/>
        <AdminHeader v-if="($store.state.manage.login && $route.path!=='/manage/login')" />
        <router-view/>
    </main>
</template>

<script>
    import store from '@/store'
    import '@/assets/css/manage.css'

    export default {
        name: 'AdminLayout',
        components: {
            AdminHeader: () => import("./manage/AdminHeader"),
        },
        mounted() {
            this.$store.dispatch("LoadingStart", this.$root)
            Promise.all(this.Init()).then(() => {
                this.$store.dispatch("LoadingEnd", this.$root)
            }).catch(_Error => {
                alert(_Error)
                this.$store.dispatch("LoadingFail", this.$root)
                this.$router.push('/error')
            })
        },
        beforeRouteEnter (_To, _From, _Next) {
            store.dispatch('CheckAuth').then(_Resolve => {
                _Next()
            }).catch(_Reject => {
                (_To.meta.Auth) ? _Next({path: '/manage/login?redirect=true'}) : _Next()
            })
        },
        beforeRouteUpdate (_To, _From, _Next) {
            store.dispatch('CheckAuth').then(_Resolve => {
                _Next()
            }).catch(_Reject => {
                (_To.meta.Auth) ? _Next({path: '/manage/login?redirect=true'}) : _Next()
            })
        },
        methods: {
            Init() {
                return [
                    new Promise((_Resolve, _Reject) => this.GetWebsiteConfig(_Resolve, _Reject)),
                    new Promise((_Resolve, _Reject) => this.GetLogo(_Resolve, _Reject))
                ]
            },
            GetWebsiteConfig(_Resolve, _Reject) {
                this.$store.dispatch("GetWebsiteConfig").then((_Response) => {
                    _Resolve()
                }).catch((_Error) => {
                    _Reject(_Error)
                })
            },
            GetLogo(_Resolve, _Reject) {
                this.$store.dispatch("GetLogo").then(() => {
                    _Resolve()
                }).catch(function (_Error) {
                    _Reject(_Error)
                })
            }
        }
    }
</script>