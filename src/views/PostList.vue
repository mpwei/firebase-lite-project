<template>
  <ContentWrapper id="postList">
    <section class="container">
      <h1>文章列表</h1>
      {{$route.path}}
    </section>
  </ContentWrapper>
</template>

<script>
  export default {
    name: 'PostList',
    mounted() {
      this.GetData()
    },
    methods: {
      GetData() {
        // console.log(this.$store)
      }
    }
  }
</script>