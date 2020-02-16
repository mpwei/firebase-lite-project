<template>
    <section class="container my-4">
        <b-card-group class="ArticleList" deck>
            <b-card no-body class="rounded-0" v-for="(value,index) in Posts" :key="index" @click="$router.push({ name: 'posts', params: { slug: value.Slug }})">
                <b-card-img-lazy class="rounded-0" v-bind="mainProps" :src="value.Cover" :alt="value.Title" />
                <b-card-body body-tag="article">
                    <b-card-title title-tag="h3" class="h4 font-weight-bold">{{value.Title}}</b-card-title>
                    <b-card-text>{{value.Excerpt}}</b-card-text>
                </b-card-body>
                <b-card-footer class="bg-white border-0 text-muted small">
                    <span v-for="(tag,index) in value.Tags" :key="index">{{tag}}</span>
                    <span>{{$moment(value.PostTime).format("Y-MM-DD HH:m:s")}}</span>
                </b-card-footer>
            </b-card>
            <b-card no-body class="rounded-0" :key="number" v-for="number in ComingSoon()">
                <b-card-body body-tag="article" class="align-items-center d-flex justify-content-center">
                    <b-card-title title-tag="h3" class="h4 font-weight-bold">Coming Soon</b-card-title>
                </b-card-body>
            </b-card>
        </b-card-group>
    </section>
</template>

<script>
    export default {
        name: 'HomeHorizontalPost',
        data() {
            return {
                mainProps: {
                    center: true,
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#999',
                    block: true,
                    blankWidth:600,
                    blankHeight:400
                },
                Posts: []
            }
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
                    new Promise((_Resolve, _Reject) => this.GetPosts(_Resolve, _Reject)),
                ]
            },
            GetPosts(_Resolve, _Reject) {
                this.$store.state.database.collection('Posts').get().then(_Response => {
                    _Response.forEach(doc => {
                        this.$store.dispatch('GetStorageImages', doc.data().Cover).then(_Response => {
                            this.Posts.push({
                                No:  doc.data().No,
                                Cover: _Response,
                                Title: doc.data().Title,
                                Slug: doc.data().Slug,
                                Excerpt: doc.data().Excerpt,
                                PostTime: doc.data().PostTime,
                                Tags: doc.data().Tags
                            })
                        })
                    })
                    _Resolve()
                }).catch((_Error) => {
                    _Reject(_Error)
                })
            },
            ComingSoon(_Column = 3) {
                return parseInt(_Column - this.Posts.length)
            }
        }
    }
</script>