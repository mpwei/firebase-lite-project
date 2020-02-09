<template>
    <ContentWrapper id="AdminLogin">
        <section class="container text-center">
            <h1>總覽</h1>
        </section>
    </ContentWrapper>
</template>

<script>
    export default {
        name: 'Dashboard',
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