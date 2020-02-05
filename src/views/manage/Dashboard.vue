<template>
  <ContentWrapper id="AdminLogin">
    <section class="container text-center my-5">
      <h1>Dashboard</h1>
      <button class="btn btn-lg btn-dark btn-block shadow" type="button" @click="Logout">logout</button>
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'Dashboard',
    mounted() {
    },
    methods: {
      Logout() {
        this.$store.state.auth.signOut().then(_Response => {
          alert('success logout')
          this.$router.push('/manage/login')
        }).catch(_Error => {
          alert(_Error)
        })
      }
    }
  }
</script>