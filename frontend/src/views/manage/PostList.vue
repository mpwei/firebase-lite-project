<template>
    <ContentWrapper id="Dashboard" class="AdminContent">
        <section class="container">
            <div class="my-3 p-3 bg-white rounded shadow-sm">
                <h1 class="font-weight-bold border-bottom pb-3 h4 mb-3">文章列表</h1>
                <div v-if="Loading" class="text-center p-5">
                    <b-spinner label="Loading..."/>
                </div>
                <b-table v-if="(List.length > 0 && !Loading)" hover borderless :items="List" :fields="Fields" head-variant="dark" class="mb-0" >
                    <template v-slot:cell(Tags)="row">
                        <b-badge variant="secondary" pill :key="index" v-for="(value, index) in row.item.Tags" class="mr-1 mb-1">{{value}}</b-badge>
                    </template>
                    <template v-slot:cell(Action)="row">
                        <b-button size="sm" @click="$router.push({ name: 'PostEdit', params: { slug: row.item.Slug, doc: row.item.ID }})" class="mr-2"><i class="fa fa-edit" /></b-button>
                        <b-button variant="danger" size="sm" @click="row.toggleDetails"><i class="fa fa-remove" /></b-button>
                    </template>
                </b-table>
                <div v-if="(List.length === 0 && !Loading)" class="text-center p-5">{{$t('Message.Manage.post/nodata')}}</div>
            </div>
        </section>
    </ContentWrapper>
</template>

<script>
    export default {
        name: 'PostList',
        data() {
            return {
                List: [],
                Loading: true
            }
        },
        computed: {
            Fields() {
                return [
                    {key: 'Title', label: this.$t('Manage.Post.PostList/Title')},
                    {key: 'Slug', label: this.$t('Manage.Post.PostList/Slug')},
                    {key: 'PostTime', label: this.$t('Manage.Post.PostList/PostTime')},
                    {key: 'Tags', label: this.$t('Manage.Post.PostList/Tags')},
                    {key: 'Action', label: this.$t('Manage.Post.PostList/Action')},
                ]
            }
        },
        mounted() {
            this.$root.$Progress.start()
            Promise.all(this.Init()).then(() => {
                this.$root.$Progress.finish()
                this.Loading = !this.Loading
            }).catch(_Error => {
                alert(_Error)
                this.$root.$Progress.fail()
                this.$router.push('/error')
            })
        },
        methods: {
            Init() {
                return [
                    new Promise((_Resolve, _Reject) => this.GetPostList(_Resolve, _Reject))
                ]
            },
            GetPostList(_Resolve, _Reject) {
                this.$store.state.database.collection('Posts').orderBy('PostTime', 'desc').get().then(_Response => {
                    _Response.forEach(doc => {
                        this.List.push({
                            ID: doc.id,
                            Title: doc.data().Title,
                            Slug: doc.data().Slug,
                            PostTime: this.$moment.unix(doc.data().PostTime).format("Y-MM-DD HH:m:s"),
                            Tags: doc.data().Tags
                        })
                    })
                    _Resolve()
                }).catch((_Error) => {
                    _Reject(_Error)
                })
            }
        }
    }
</script>