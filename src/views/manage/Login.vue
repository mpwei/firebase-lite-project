<template>
  <ContentWrapper id="AdminLogin">
    <section class="container my-5">
      <form class="form-signin" @submit.prevent="DoLogin">
        <div class="mb-4">
          <img :src="$store.state.profile.logo" :alt="$store.state.profile.website.Title[$store.state.language]" class="mb-4 mx-auto d-block">
          <h1 class="text-center h3 mb-3 font-weight-bold">{{$t('Manage.ManageLogin')}}</h1>
          <b-alert :show="Error" variant="danger" fade dismissible @dismissed="Error = false">
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
    mounted() {
    },
    methods: {
      DoLogin() {
        this.$store.state.auth.signInWithEmailAndPassword(this.Account, this.Password).then(_Response => {
          console.log(_Response)
          alert('success')
        }).catch(_Error => {
          this.Error = true
          this.ErrorMessage = this.$t('Message.Manage.' + _Error.code)
        });
      }
    }
  }
</script>

<style>
  html,
  body {
    height: 100%;
  }

  #AdminLogin > section {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .form-signin {
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: auto;
  }

  .form-label-group {
    position: relative;
    margin-bottom: 1rem;
  }

  .form-label-group > input,
  .form-label-group > label {
    height: 3.125rem;
    padding: .75rem;
  }

  .form-label-group > label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0; /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    pointer-events: none;
    cursor: text; /* Match the input under the label */
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
  }

  .form-label-group input::-webkit-input-placeholder {
    color: transparent;
  }

  .form-label-group input:-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-moz-placeholder {
    color: transparent;
  }

  .form-label-group input::placeholder {
    color: transparent;
  }

  .form-label-group input:not(:placeholder-shown) {
    padding-top: 1.25rem;
    padding-bottom: .25rem;
  }

  .form-label-group input:not(:placeholder-shown) ~ label {
    padding-top: .25rem;
    padding-bottom: .25rem;
    font-size: 12px;
    color: #777;
  }

  /* Fallback for Edge
  -------------------------------------------------- */
  @supports (-ms-ime-align: auto) {
    .form-label-group > label {
      display: none;
    }
    .form-label-group input::-ms-input-placeholder {
      color: #777;
    }
  }

  /* Fallback for IE
  -------------------------------------------------- */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .form-label-group > label {
      display: none;
    }
    .form-label-group input:-ms-input-placeholder {
      color: #777;
    }
  }
</style>