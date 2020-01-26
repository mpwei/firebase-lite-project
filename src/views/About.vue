<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export default {
    name: 'About',
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