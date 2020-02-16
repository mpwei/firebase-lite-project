<template>
    <ContentWrapper id="Dashboard" class="AdminContent">
        <section class="container">
            <form class="my-3 p-3 bg-white rounded shadow-sm">
                <h1 class="font-weight-bold border-bottom pb-3 h4 mb-3">{{$t('Manage.Menu.' + $route.name)}}</h1>
                <b-row>
                    <b-col lg="6" sm="12">
                        <b-row class="my-1">
                            <b-col sm="3">
                                <label for="input-none">No State:</label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="6" sm="12">
                        <b-row class="my-1">
                            <b-col sm="3">
                                <label for="input-none">No State:</label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="6" sm="12">
                        <b-row class="my-1">
                            <b-col sm="3">
                                <label for="input-none">No State:</label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="6" sm="12">
                        <b-row class="my-1">
                            <b-col sm="3">
                                <label for="input-none">No State:</label>
                            </b-col>
                            <b-col sm="9">
                                <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </form>
        </section>
    </ContentWrapper>
</template>

<script>
    export default {
        name: 'AddPost',
        data() {
            return {
                PostData: [],
                Loading: true
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

                ]
            }
        }
    }
</script>