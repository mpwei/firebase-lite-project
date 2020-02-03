<template>
  <ContentWrapper id="AdminLogin">
    <section class="container my-5">
      <form class="form-signin">
        <div class="text-center mb-4">
          <img :src="$store.state.profile.logo" :alt="$store.state.profile.website.Title[$store.state.language]" class="mb-4">
          <h1 class="h3 mb-3 font-weight-bold">管理員登入</h1>
          <p>
          </p>
        </div>

        <div class="form-label-group">
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
          <label for="inputEmail">Email address</label>
        </div>

        <div class="form-label-group">
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
          <label for="inputPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted text-center">Copyright © {{$store.state.profile.website.Year}}</p>
      </form>
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'AdminLogin',
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
      DoLogin(_Account, _Password) {
        this.$store.state.auth.signInWithEmailAndPassword(_Account, _Password).then(_Response => {
          console.log(_Response)
        }).catch(_Error => {
          // Handle Errors here.
          const errorCode = _Error.code;
          const errorMessage = _Error.message;
          alert(errorCode + errorMessage)
          // ...
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