<template>
  <ContentWrapper id="AdminLogin">
    <section class="container my-lg-5">
      <form class="form-signin" @submit.prevent="DoLogin">
        <div class="mb-4">
          <img :src="$store.state.profile.logo" :alt="$store.state.profile.website.Title[$store.state.language]" class="mb-4 mx-auto d-block">
          <h1 class="text-center h3 mb-3 font-weight-bold">{{$t('Manage.ManageLogin')}}</h1>
          <b-alert class="shadow" :show="Error" :variant="Variant" fade dismissible @dismissed="Error = false">
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
        <p class="mt-5 mb-3 text-muted text-center">Copyright © {{$store.state.profile.website.Year}} {{$store.state.profile.website.Title[$store.state.language]}}</p>
      </form>
    </section>
  </ContentWrapper>
</template>

<script>
  import store from "@/store";

  export default {
    name: 'AdminLogin',
    data() {
      return {
        Account: '',
        Password: '',
        RememberMe: true,
        Error: false,
        ErrorMessage: '',
        Variant: 'danger'
      }
    },
    computed: {
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
          new Promise((_Resolve) => this.CheckAuth(_Resolve)),
        ]
      },
      DoLogin() {
        this.$root.$Progress.start()
        this.$store.state.auth.signInWithEmailAndPassword(this.Account, this.Password).then(_Response => {
          this.WriteLoginRecord(_Response).then(_Resolve => {
            this.$root.$Progress.finish()
            this.$router.push('/manage/dashboard')
          }).catch(_Reject => {
            this.$root.$Progress.fail()
            this.Error = true
            this.Variant = 'danger'
            this.ErrorMessage = this.$t('Message.Manage.auth/unexpected-error')
          })
        }).catch(_Error => {
          this.$root.$Progress.fail()
          this.Error = true
          this.Variant = 'danger'
          this.ErrorMessage = this.$t('Message.Manage.' + _Error.code)
        })
      },
      WriteLoginRecord(_Response) {
        return new Promise((_Resolve, _Reject) => {
          this.$store.state.database.collection('LoginRecord').add({
            Account: this.Account,
            Uid: _Response.user.uid,
            LoginTime: _Response.user.metadata.b
          }).then(_Response => {
            _Resolve()
          }).catch(_Error => {
            _Reject(_Error)
          })
        })
      },
      CheckAuth(_Resolve) {
        this.$store.dispatch('CheckAuth').then(_Response => {
          this.$router.push('/manage/dashboard')
          _Resolve()
        }).catch(_Error => {
          if (this.$route.query.redirect) {
            this.Error = true
            this.Variant = 'info'
            this.ErrorMessage = this.$t('Message.Manage.auth/expired')
          }
          _Resolve()
        })
      },
    }
  }
</script>