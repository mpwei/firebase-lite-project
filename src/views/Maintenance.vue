<template>
  <ContentWrapper id="Maintenance">
    <section class="container text-center my-5">
      <h1>Server Maintenance</h1>
      <p>此頁面維護中，請稍後再訪問。</p>
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'Maintenance',
    mounted() {
      this.GetData()
    },
    methods: {
      GetData() {

      }
    }
  }
</script>