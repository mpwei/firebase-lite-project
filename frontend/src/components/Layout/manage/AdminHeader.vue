<template>
    <header id="AdminHeader">
        <b-navbar id="MainNav" toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#" class="site-logo">
                <img :src="Logo" alt="More Patient">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"/>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="MainLeft">
                    <template v-for="(value,index) in $Function.ManageMenu">
                        <b-nav-item :key="index" v-if="value.Open" @click="SelectNav(index, value)">{{$t('Manage.Menu.' + index)}}</b-nav-item>
                    </template>
                </b-navbar-nav>
                <b-navbar-nav class="MainRight ml-auto">
                    <b-nav-item href="#" right v-b-tooltip.hover :title="$t('Manage.Alert')">
                        <i class="fa fa-bell" />
                    </b-nav-item>
                    <b-nav-item href="#" right v-b-tooltip.hover :title="$t('Manage.MediaStore')">
                        <i class="fa fa-image" />
                    </b-nav-item>
                    <b-nav-item href="#" right v-b-tooltip.hover :title="$t('Manage.SystemConfig')">
                        <i class="fa fa-gear" />
                    </b-nav-item>
                    <b-nav-item-dropdown text="Lang" right v-b-tooltip.hover :title="$t('Manage.LangSwitcher')">
                        <template slot="button-content">
                            <i class="fa fa-globe" aria-hidden="true" />
                        </template>
                        <b-dropdown-item :key="index" v-for="(data,index) in $store.state.allowLang" @click="ChangeLanguage(data)">{{$t("Language." + data)}}</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template v-slot:button-content>
                            <i class="fa fa-ellipsis-v" aria-hidden="true" />
                        </template>
                        <b-dropdown-item href="#">{{$t('Manage.GoToWebsite')}}</b-dropdown-item>
                        <b-dropdown-item href="#">{{$t('Manage.AboutSystem')}}</b-dropdown-item>
                        <b-dropdown-item href="#">{{$t('Manage.Profile')}}</b-dropdown-item>
                        <b-dropdown-item href="#">{{$t('Manage.ResetPassword')}}</b-dropdown-item>
                        <b-dropdown-item href="#" @click="Logout">{{$t('Manage.Logout')}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-nav id="SubNav" class="nav-submenu shadow-sm">
            <template v-for="(SubNav, index) in SubNavs">
                <b-nav-item :key="index" active :to="SubNav.Path">{{$t('Manage.Menu.' + index)}}</b-nav-item>
            </template>
        </b-nav>
    </header>
</template>

<script>
    export default {
        name: "AdminHeader",
        data() {
            return {
                Logo: 'images/logo_icon_w.png',
                Page: 'DashBoard',
                SubNavs: []
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
            SelectNav(_Index, _Value) {
                this.SubNavs = []
                if (_Value.Sub) {
                    this.SubNavs = _Value.Sub
                } else {
                    this.$router.push('/manage' + _Value.Path)
                }
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