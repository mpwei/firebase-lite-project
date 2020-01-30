<template>
  <ContentWrapper id="post">
    <section class="container">
      <h1>文章</h1>
      {{$route.path}}
      {{$route.params}}
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'Post',
    mounted() {
      this.GetData()
    },
    methods: {
      GetData() {
        console.log(this.$route)
      }
    }
  }
</script>