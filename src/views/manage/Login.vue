<template>
  <ContentWrapper id="AdminLogin">
    <section class="container my-5">
      <form class="form-signin" @submit.prevent="DoLogin">
        <div class="mb-4">
          <img :src="$store.state.profile.logo" :alt="$store.state.profile.website.Title[$store.state.language]" class="mb-4 mx-auto d-block">
          <h1 class="text-center h3 mb-3 font-weight-bold">{{$t('Manage.ManageLogin')}}</h1>
          <b-alert class="shadow" :show="Error" variant="danger" fade dismissible @dismissed="Error = false">
            {{ErrorMessage}}
          </b-alert>
        </div>

        <div class="form-label-group">
          <input type="email" id="inputEmail" class="form-control" v-model="Account" :placeholder="$t('Manage.Account')" required autofocus>
          <label for="inputEmail">{{$t('Manage.Account')}}</label>
        </div>

        <div class="form-label-group">
          <input type="password" id="inputPassword" class="form-control" v-model="Password" :placeholder="$t('Manage.Password')" required>
          <label for="inputPassword">{{$t('Manage.Password')}}</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" v-model="RememberMe"> {{$t('Manage.Remember')}}
          </label>
        </div>
        <button class="btn btn-lg btn-dark btn-block shadow" type="submit">{{$t('Manage.Login')}}</button>
        <button class="btn btn-lg btn-dark btn-block shadow" type="button" @click="Logout">logout</button>
        <p class="mt-5 mb-3 text-muted text-center">Copyright © {{$store.state.profile.website.Year}} {{$store.state.profile.website.Title[$store.state.language]}}</p>
      </form>
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'AdminLogin',
    data() {
      return {
        Account: '',
        Password: '',
        RememberMe: true,
        Error: false,
        ErrorMessage: '',
      }
    },
    computed: {
    },
    mounted() {
    },
    methods: {
      DoLogin() {
        this.$root.$Progress.start()
        this.$store.state.auth.signInWithEmailAndPassword(this.Account, this.Password).then(_Response => {
          this.$root.$Progress.finish()
          this.$router.push('/manage/dashboard')
        }).catch(_Error => {
          this.$root.$Progress.fail()
          this.Error = true
          this.ErrorMessage = this.$t('Message.Manage.' + _Error.code)
        })
      },
      Logout() {
        this.$store.state.auth.signOut().then(_Response => {
          alert('success logout')
        }).catch(_Error => {
          alert(_Error)
        })
      }
    }
  }
</script>