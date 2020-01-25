<template>
    <header id="header">
        <b-navbar type="light" variant="white">
            <div class="container">
                <b-navbar-brand to="/" class="site-logo mr-auto">
                    <img src="../../assets/img/logo_icon.png" alt="More Patient">
                    <span class="ml-2">More Patient.</span>
                </b-navbar-brand>
            </div>
        </b-navbar>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <div class="container">
                <b-navbar-toggle target="nav-collapse"/>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item :key="index" v-for="(value,index) in Menu" :to="value.Url">{{value.Name}}
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
                Menu: []
            }
        },
        mounted() {
            this.GetMenu()
        },
        methods: {
            GetMenu() {
                let self = this
                this.$store.state.loading = true
                this.$binding("response", this.$store.state.database.collection('Menu').orderBy('No', 'asc')).then(response => {
                    self.Menu = response
                    this.$store.state.loading = false
                }).catch(error => {
                    alert(error)
                    this.$store.state.loading = false
                })
            }
        }
    }
</script>