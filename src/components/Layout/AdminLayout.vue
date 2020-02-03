<template>
    <main>
        <Loading v-if="$store.state.loading"/>
        <vue-progress-bar/>
        <router-view/>
    </main>
</template>

<script>
    export default {
        name: 'AdminLayout',
        components: {},
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