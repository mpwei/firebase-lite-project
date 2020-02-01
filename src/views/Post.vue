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
        data() {
            return {
                Post: {}
            }
        },
        mounted() {
            this.$root.$Progress.start()
            Promise.all(this.Init()).then(() => {
                this.$root.$Progress.finish()
            }).catch(_Error => {
                alert(_Error)
                this.$root.$Progress.fail()
                this.$router.push('/notfound')
            })
        },
        methods: {
            Init() {
                return [
                    new Promise((_Resolve, _Reject) => this.GetData(_Resolve, _Reject)),
                ]
            },
            GetData(_Resolve, _Reject) {
                this.$store.state.database.collection('PostDetail').doc(this.$route.params.slug).get().then(_Response => {
                    if (_Response.exists) {
                        this.Post = _Response.data()
                        _Resolve()
                    } else {
                        _Reject('Not found')
                    }
                }).catch((_Error) => {
                    _Reject(_Error)
                })
            }
        }
    }
</script>