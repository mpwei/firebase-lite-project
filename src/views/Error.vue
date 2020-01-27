<template>
  <ContentWrapper id="ErrorPage">
    <section class="container text-center">
      <h1>Error 403</h1>
      <p>發生了點錯誤，請稍後再訪問。</p>
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'ErrorPage',
    mounted() {
      this.GetData()
    },
    methods: {
      GetData() {

      }
    }
  }
</script>