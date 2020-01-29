<template>
    <ContentWrapper id="home">
        <section v-if="Carousel.Items.length > 0" class="container d-none d-md-block mb-4">
            <b-carousel id="IndexCarousel" v-model="Carousel.Slide" :interval="6000"  @sliding-start="onSlideStart" @sliding-end="onSlideEnd"
            >
                <b-carousel-slide v-for="(value, key) in Carousel.Items" :key="key">
                    <div slot="img" class="row no-gutters">
                        <div class="col-lg-8">
                            <img :src="value.Url" :alt="value.Alt" :title="value.Title" :to="value.Link" class="img-fluid">
                        </div>
                        <div class="col-lg-4">
                            <b-card no-body class="h-100 rounded-0">
                                <b-card-body body-tag="article">
                                    <b-card-title title-tag="h3" class="h2 font-weight-bold">{{value.Title}}</b-card-title>
                                    <b-card-text>
                                        {{value.Content}}
                                    </b-card-text>
                                </b-card-body>
                                <b-card-footer class="bg-white border-0 text-secondary small">
                                    <span>Vue.js</span>
                                    <span>Firebase</span>
                                    <span>2020-01-20</span>
                                </b-card-footer>
                            </b-card>
                        </div>
                    </div>
                </b-carousel-slide>
            </b-carousel>
        </section>
        <section class="container mb-4">

        </section>
    </ContentWrapper>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                Carousel: {
                    Slide: 0,
                    Sliding: null,
                    Items: []
                }
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
                    new Promise((_Resolve, _Reject) => this.GetCarousel(_Resolve, _Reject)),
                ]
            },
            GetCarousel(_Resolve, _Reject) {
                this.$store.state.database.collection('Carousel').get().then(_Response => {
                    _Response.forEach(doc => {
                        this.GetCarouselImage(doc.data().Url).then(_Resolve => {
                            this.Carousel.Items.push({
                                No:  doc.data().No,
                                Url: _Resolve,
                                Content:  doc.data().Content,
                                Title:  doc.data().Title,
                                Alt:  doc.data().Alt,
                                Link:  doc.data().Link,
                                Type:  doc.data().Type
                            })
                        })
                    })
                    _Resolve()
                }).catch((_Error) => {
                    _Reject(_Error)
                })
            },
            GetCarouselImage(_Path) {
                return new Promise((_Resolve, _Reject) => {
                    this.$store.state.storage.ref().child(_Path).getDownloadURL().then(URL => {
                        _Resolve(URL)
                    }).catch(_Error => {
                        _Reject(_Error)
                    });
                })
            },
            onSlideStart() {
                this.Carousel.Sliding = true
            },
            onSlideEnd() {
                this.Carousel.Sliding = false
            }
        }
    }
</script>