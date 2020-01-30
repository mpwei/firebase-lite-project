<template>
    <section class="container mb-4">
        <b-card-group class="ArticleList" deck>
            <b-card no-body v-for="(value,index) in Posts" :key="index" @click="$router.push({ name: 'posts', params: { slug: value.Slug }})">
                <b-card-img-lazy v-bind="mainProps" :src="value.Cover" :alt="value.Title" />
                <b-card-body body-tag="article">
                    <b-card-title title-tag="h3" class="h4 font-weight-bold">{{value.Title}}</b-card-title>
                    <b-card-text>{{value.Excerpt}}</b-card-text>
                </b-card-body>
                <b-card-footer class="bg-white border-0 text-secondary small">
                    <span v-for="(tag,index) in value.Tags" :key="index">{{tag}}</span>
                    <span>{{value.PostTime}}</span>
                </b-card-footer>
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
                Posts: [
                    {
                        No: 0,
                        Cover: 'images/slide_dev3.jpg',
                        Title: 'Firestore基本操作',
                        Slug: 'firebase-intro',
                        Excerpt: 'Firestore寫入、更新、讀取、刪除。',
                        PostTime: '2020-01-20 00:00:00',
                        Tags: ['Firestore','NoSQL']
                    },
                    {
                        No: 1,
                        Cover: 'images/slide_dev3.jpg',
                        Title: 'Firestore基本操作2',
                        Slug: 'firebase-intro2',
                        Excerpt: 'Firestore寫入、更新、讀取、刪除。',
                        PostTime: '2020-01-20 00:00:00',
                        Tags: ['Firestore','NoSQL']
                    },
                    {
                        No: 2,
                        Cover: 'images/slide_dev3.jpg',
                        Title: 'Firestore基本操作3',
                        Slug: 'firebase-intro3',
                        Excerpt: 'Firestore寫入、更新、讀取、刪除。',
                        PostTime: '2020-01-20 00:00:00',
                        Tags: ['Firestore','NoSQL']
                    }
                ]
            }
        },
        computed: {

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
                    new Promise((_Resolve, _Reject) => this.SetCover(_Resolve, _Reject)),
                ]
            },
            GetCover(_Path) {
                return new Promise((_Resolve, _Reject) => {
                    this.$store.state.storage.ref().child(_Path).getDownloadURL().then(URL => {
                        _Resolve(URL)
                    }).catch(_Error => {
                        _Reject(_Error)
                    });
                })
            },
            SetCover(_Resolve, _Reject) {
                this.Posts.forEach((_Data, _Index) => {
                    this.GetCover(_Data.Cover).then((_Resolve) => {
                        this.Posts[_Index].Cover = _Resolve
                    }).catch((_Error) => {
                        this.Posts[_Index].Cover = '404'
                    })
                })
                _Resolve()
            }
        }
    }
</script>