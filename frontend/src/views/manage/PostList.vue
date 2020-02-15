<template>
    <ContentWrapper id="Dashboard" class="AdminContent">
        <section class="container">
            <h4 class="font-weight-bold h2">文章列表</h4>
            <div class="my-3 p-3 bg-white rounded shadow-sm">
                <div v-if="Loading" class="text-center p-5">
                    <b-spinner label="Loading..."/>
                </div>
                <b-table v-if="(List.length > 0 && !Loading)" hover borderless :items="List" :fields="Fields" class="mb-0" >
                    <template v-slot:cell(Action)="row">
                        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                        </b-button>
                    </template>
                </b-table>
                <div v-if="(List.length === 0 && !Loading)" class="text-center p-5">目前無任何文章。</div>
            </div>
        </section>
    </ContentWrapper>
</template>

<script>
    export default {
        name: 'PostList',
        data() {
            return {
                Fields: [
                    {key: 'Title', label: this.$t('Manage.Post.PostList/Title')},
                    {key: 'Slug', label: this.$t('Manage.Post.PostList/Slug')},
                    {key: 'PostTime', label: this.$t('Manage.Post.PostList/PostTime')},
                    {key: 'Tags', label: this.$t('Manage.Post.PostList/Tags')},
                    {key: 'Action', label: this.$t('Manage.Post.PostList/Action')},
                ],
                List: [],
                Loading: true
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