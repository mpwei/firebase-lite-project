<template>
    <header id="header">
        <b-navbar type="light" variant="white">
            <div class="container">
                <b-navbar-brand to="/" class="site-logo mr-auto">
                    <img :src="Logo" alt="More Patient">
                    <span class="ml-2">More Patient.</span>
                </b-navbar-brand>
            </div>
        </b-navbar>
        <b-navbar toggleable="md" type="dark" variant="dark">
            <div class="container">
                <b-navbar-toggle target="nav-collapse"/>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item class="mr-lg-3" :key="index" v-for="(value,index) in Menu" :to="value.Url"
                                    :class="{'active': value.Url === $route.path}">{{value.Name}}
                        </b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto d-none d-md-flex">
                        <b-nav-item right :key="index" v-for="(value,index) in Social" :href="value.link"
                                    target="_blank">
                            <i class="fa" :class="'fa-' + value.icon"/>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                Menu: [],
                Logo: '',
                Social: {
                    mail: {
                        icon: 'envelope',
                        link: 'mailto:mailermpwei@gmail.com'
                    },
                    github: {
                        icon: 'github',
                        link: '//github.com/mpwei'
                    }
                }
            }
        },
        mounted() {
            this.$store.dispatch("LoadingStart", this.$root)
            Promise.all(this.Init()).then(() => {
                this.$store.dispatch("LoadingEnd", this.$root)
            })
        },
        methods: {
            Init() {
                return [
                    new Promise(_Resolve => this.GetLogo(_Resolve)),
                    new Promise(_Resolve => this.GetMenu(_Resolve)),
                ]
            },
            GetLogo(_Resolve) {
                let self = this
                this.$store.state.storage.ref().child('images/logo_icon.png').getDownloadURL().then(url => {
                    self.Logo = url
                    _Resolve()
                }).catch(function (error) {
                    alert(error)
                    _Resolve()
                });
            },
            GetMenu(_Resolve) {
                let self = this
                this.$binding("response", this.$store.state.database.collection('Menu').where('Open', '==', true).orderBy('No', 'asc')).then(response => {
                    self.Menu = response
                    _Resolve()
                }).catch(error => {
                    alert(error)
                    _Resolve()
                })
            }
        }
    }
</script>