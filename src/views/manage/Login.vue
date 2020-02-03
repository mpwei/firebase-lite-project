<template>
  <ContentWrapper id="AdminLogin">
    <section class="container text-center my-5">
      <h1 class="h4 font-weight-bold">
        <img :src="$store.state.profile.logo" :alt="$store.state.profile.website.Title[$store.state.language]" class="mb-3">
        <span class="d-block">Admin Login</span>
      </h1>
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

    }
  }
</script>