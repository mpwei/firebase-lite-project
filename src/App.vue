<template>
    <div id="app">
        <Loading v-if="$store.state.loading"/>
        <vue-progress-bar/>
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Header from "./components/Layout/Header";
    import Footer from "./components/Layout/Footer";
    import ContentWrapper from "./components/Layout/ContentWrapper";
    import Loading from "./components/Common/Loading";

    Vue.component('ContentWrapper', ContentWrapper)

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            Loading
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
                let self = this
                this.$store.state.database.collection('Config').doc('Website').get().then(_Response => {
                    self.$store.state.profile.website = _Response.data()
                    _Resolve()
                }).catch(function (_Error) {
                    _Reject(_Error)
                });
            },
            GetLogo(_Resolve, _Reject) {
                let self = this
                this.$store.state.storage.ref().child(self.$store.state.profile.logo).getDownloadURL().then(URL => {
                    self.$store.state.profile.logo = URL
                    _Resolve()
                }).catch(_Error => {
                    _Reject(_Error)
                });
            },
            GetMenu(_Resolve, _Reject) {
                let self = this
                this.$binding("_Response", this.$store.state.database.collection('Menu').where('Open', '==', true).orderBy('No', 'asc')).then(_Response => {
                    self.$store.state.profile.menu = _Response
                    _Resolve()
                }).catch(_Error => {
                    _Reject(_Error)
                })
            }
        }
    }
</script>
