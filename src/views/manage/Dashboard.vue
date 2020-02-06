<template>
  <ContentWrapper id="AdminLogin">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"><img :src="$store.state.profile.logo" alt="More Patient"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>User</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="Logout">{{$t('Manage.Logout')}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-nav class="nav-submenu shadow-sm">
      <b-nav-item active>Link</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Link</b-nav-item>
    </b-nav>


    <section class="container text-center my-5">
      <h1>Dashboard</h1>
      <button class="btn btn-lg btn-dark btn-block shadow" type="button" @click="Logout">logout</button>
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'Dashboard',
    data(){
      return {
        Logo: 'images/'
      }
    },
    mounted() {
    },
    methods: {
      Init() {

      },
      GetLogo() {

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