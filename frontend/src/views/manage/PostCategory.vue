<template>
    <ContentWrapper id="Dashboard" class="AdminContent">
        <section class="container">
            <h1 class="font-weight-bold h2">文章分類</h1>
        </section>
    </ContentWrapper>
</template>

<script>
    export default {
        name: 'PostList',
        data() {
            return {}
        },
        mounted() {
          this.$root.$Progress.start()
          Promise.all(this.Init()).then(() => {
            this.$root.$Progress.finish()
          }).catch(_Error => {
            alert(_Error)
            this.$root.$Progress.fail()
            this.$router.push('/error')
          })
        },
        methods: {
            Init() {
                return [

                ]
            }
        }
    }
</script>