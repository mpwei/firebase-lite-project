<template>
  <ContentWrapper id="AdminLogin">
    <section class="container text-center my-5">
      <h1 class="h4 font-weight-bold">
        <img :src="$store.state.profile.logo" :alt="$store.state.profile.website.Title" class="mb-3">
        <span class="d-block mb-1">{{$store.state.profile.website.Title}}</span>
        <span class="d-block">Admin Login</span>
      </h1>
      {{ $t("message.hello") }}
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