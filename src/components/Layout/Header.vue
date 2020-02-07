<template>
    <header id="header">
        <b-navbar type="light" variant="white">
            <div class="container">
                <b-navbar-brand to="/" class="site-logo mr-auto">
                    <img :src="$store.state.profile.logo" alt="More Patient">
                    <h1 class="d-inline ml-2">More Patient.</h1>
                </b-navbar-brand>
            </div>
        </b-navbar>
        <b-navbar toggleable="md" type="dark" variant="dark">
            <div class="container">
                <b-navbar-toggle target="nav-collapse"/>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item class="mr-lg-3" :key="index" v-for="(value,index) in $store.state.profile.menu" :to="value.Url"
                                    :class="{'active': value.Url === $route.path}">{{value.Name[$store.state.language]}}
                        </b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto d-none d-md-flex">
                        <b-nav-item right :key="index" v-for="(value,index) in Social" :href="value.link"
                                    target="_blank">
                            <i class="fa" :class="'fa-' + value.icon"/>
                        </b-nav-item>
                        <b-nav-item-dropdown class="rounded-0" text="Lang" right>
                            <template slot="button-content">
                                <i class="fa fa-globe" aria-hidden="true" />
                            </template>
                            <b-dropdown-item :key="index" v-for="(data,index) in $store.state.allowLang" @click="ChangeLanguage(data)">{{$t("Language." + data)}}</b-dropdown-item>
                        </b-nav-item-dropdown>
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
                Logo: 'images/logo_icon.png',
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

        },
        methods: {
            Init() {
            },
            ChangeLanguage(_Language) {
                this.$store.dispatch('LoadLanguage', _Language).then(_Response => {
                    this.$i18n.locale = _Language
                })
            }
        }
    }
</script>