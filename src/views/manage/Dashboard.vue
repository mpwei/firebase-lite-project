<template>
    <ContentWrapper id="AdminLogin">
        <b-navbar id="MainNav" toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#" class="site-logo">
                <img :src="Logo" alt="More Patient">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"/>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="MainLeft">
                    <b-nav-item to="/manage/dashboard">網站總攬</b-nav-item>
                    <b-nav-item href="#">版面設定</b-nav-item>
                    <b-nav-item href="#">商品管理</b-nav-item>
                    <b-nav-item href="#">文章管理</b-nav-item>
                    <b-nav-item href="#">會員管理</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="MainRight ml-auto">
                    <b-nav-item href="#" right>
                        <i class="fa fa-image" /> <span class="sr-only">媒體庫</span>
                    </b-nav-item>
                    <b-nav-item href="#" right>
                        <i class="fa fa-gear" /> <span class="sr-only">設定</span>
                    </b-nav-item>
                    <b-nav-item-dropdown text="Lang" right>
                        <template slot="button-content">
                            <i class="fa fa-globe" aria-hidden="true" /> <span class="ml-1">語系</span>
                        </template>
                        <b-dropdown-item :key="index" v-for="(data,index) in $store.state.allowLang" @click="ChangeLanguage(data)">{{$t("Language." + data)}}</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template v-slot:button-content>
                            <i class="fa fa-user" aria-hidden="true" /> <span class="ml-1">帳戶</span>
                        </template>
                        <b-dropdown-item href="#">個人資料</b-dropdown-item>
                        <b-dropdown-item href="#" @click="Logout">{{$t('Manage.Logout')}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-nav id="SubNav" class="nav-submenu shadow-sm">
            <b-nav-item active>Link</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Link</b-nav-item>
        </b-nav>


        <section class="container text-center">
            <h1>網站總攬</h1>

        </section>
    </ContentWrapper>
</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                Logo: 'images/logo_icon_w.png'
            }
        },
        mounted() {
          this.$root.$Progress.start()
          Promise.all(this.Init()).then(() => {
            this.$root.$Progress.finish()
          }).catch(_Error => {
            alert(_Error)
            this.$root.$Progress.fail()
            this.$router.push('/error')
          })
        },
        methods: {
            Init() {
                return [
                    new Promise((_Resolve) => this.GetLogo(_Resolve))
                ]
            },
            GetLogo(_Resolve) {
                this.$store.dispatch('GetStorageImages', this.Logo).then(_Response => {
                    this.Logo = _Response
                    _Resolve()
                }).catch(_Error => {
                    this.Logo = this.$store.state.profile.logo
                    _Resolve()
                })
            },
            ChangeLanguage(_Language) {
                this.$store.dispatch('LoadLanguage', _Language).then(_Response => {
                    this.$i18n.locale = _Language
                })
            },
            Logout() {
                this.$store.state.auth.signOut().then(_Response => {
                    this.$swal.fire({
                        icon: "success",
                        title: this.$t('Message.Success'),
                        text: this.$t('Message.Manage.logout/success-logout'),
                    })
                    this.$router.push('/manage/login')
                }).catch(_Error => {
                    this.$swal.fire({
                        icon: "error",
                        title: this.$t('Message.Error'),
                        text: this.$t('Message.Manage.auth/unexpected-error'),
                    })
                })
            }
        }
    }
</script>