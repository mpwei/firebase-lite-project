<template>
  <ContentWrapper id="AdminLogin">
    <section class="container text-center my-5">
      <h1>Dashboard</h1>
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'Dashboard',
    mounted() {
      this.GetData()
    },
    methods: {
      GetData() {
      }
    }
  }
</script>