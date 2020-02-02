<template>
    <main>
        <Loading v-if="$store.state.loading"/>
        <vue-progress-bar/>
        <Header/>
        <router-view/>
        <Footer/>
    </main>
</template>

<script>
    export default {
        name: 'UserLayout',
        components: {
            Header: () => import("./Header"),
            Footer: () => import("./Footer"),
            Loading: () => import("../Common/Loading")
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
        methods: {
            Init() {
                return [
                    new Promise((_Resolve, _Reject) => this.GetWebsiteConfig(_Resolve, _Reject)),
                    new Promise((_Resolve, _Reject) => this.GetLogo(_Resolve, _Reject)),
                    new Promise((_Resolve, _Reject) => this.GetMenu(_Resolve, _Reject)),
                ]
            },
            GetWebsiteConfig(_Resolve, _Reject) {
                this.$store.dispatch("GetWebsiteConfig").then(() => {
                    _Resolve()
                }).catch(function (_Error) {
                    _Reject(_Error)
                })
            },
            GetLogo(_Resolve, _Reject) {
                this.$store.dispatch("GetLogo").then(() => {
                    _Resolve()
                }).catch(function (_Error) {
                    _Reject(_Error)
                })
            },
            GetMenu(_Resolve, _Reject) {
                this.$store.dispatch("GetMenu").then(() => {
                    _Resolve()
                }).catch(function (_Error) {
                    _Reject(_Error)
                })
            }
        }
    }
</script>