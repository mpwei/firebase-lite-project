<template>
  <ContentWrapper id="NotFoundPage">
    <section class="container text-center my-5">
      <h1>ERROR 404</h1>
      <p>此頁面可能已經被移除，或是更換到另一個頁面。</p>
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'NotFoundPage',
    mounted() {
      this.GetData()
    },
    methods: {
      GetData() {

      }
    }
  }
</script>