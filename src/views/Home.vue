<template>
    <ContentWrapper id="home">
        <HomeCarousel />
        <PostSection />
    </ContentWrapper>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            HomeCarousel: () => import("../components/Common/HomeCarousel"),
            PostSection: () => import("../components/Common/HomeHorizontalPost"),
        },
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>